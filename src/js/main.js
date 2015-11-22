import d3 from 'd3'
import 'sugar'

import {nodes, links} from './data'
import {collide, position} from './physics'
import {run as runAnimation} from './animation'

let container = document.getElementsByClassName('container')[0]

let width = container.clientWidth,
  height = width * 900 / 1600

let fixed = []

let nodesParsed = nodes.map((item, i) => {
  let radius = 50

  if (i === 0) {
    radius = 85
  } else if (i >= 20) {
    radius = 65
  }

  let x = item.x / 100 * width,
    y = item.y / 100 * height

  if (item.fixed) {
    fixed.push({x,y,radius})
  }

  let props = {
    index: item.index,
    name: item.name,
    color: item.color,
    fixed: item.fixed,
    image: item.image,
    x, y, radius
  }

  return props
})

let force = d3.layout.force()
  .gravity(0)
  .friction(0.05)
  .linkDistance(d => 230 * (d.distance || 1))
  .charge(d => (d.pull) ? 20000 : 0)
  .linkStrength(0.3)
  .size([width, height])

let svg = d3.select('.container').append('svg')
  .attr('width', width)
  .attr('height', height)
  .on('mouseover', mouseover)
  .on('mouseout', mouseout)
  .on('mousemove', mousemove)

svg.append('rect')
  .attr('class', 'background')
  .attr('width', width)
  .attr('height', height)

force
  .nodes(nodesParsed)
  .links(links)
  .start()

let link = svg.selectAll('.link')
  .data(links)
  .enter().append('line')
  .attr('class', 'link')
  .attr('pointer-events', 'none')
  .style('stroke-width', d => d.strength)

let node = svg.selectAll('.node')
  .data(nodesParsed)
  .enter().append('g')
  .attr('class', 'node')

node.filter(d => d.image)
  .append('image')
  .attr('pointer-events', 'none')
  .attr('xlink:href', d => `images/${d.image}`)
  .attr('x', d => -d.radius)
  .attr('y', d => -d.radius)
  .attr('width', d => d.radius * 2)
  .attr('height', d => d.radius * 2)

node.filter(d => !d.image)
  .append('circle')
  .attr('pointer-events', 'none')
  .attr('r', d => d.radius)
  .style('fill', d => d.color)
  .style('stroke', d => d3.rgb(d.color).darker())

node.filter(d => !d.image)
  .append('text')
  .attr('class', d => (d.index === 0) ? 'label main' : 'label')
  .attr('pointer-events', 'none')
  .each(function (d) {
    if (Object.isArray(d.name)) {
      d.name.forEach((line, i) => {
        d3.select(this).append('tspan')
          .attr('x', 0)
          .attr('y', `${i * 1.2 - 0.35}em`)
          .attr('text-anchor', 'middle')
          .text(line)
      })
    } else {
      d3.select(this)
        .attr('dy', '.35em')
        .attr('text-anchor', 'middle')
        .text(d.name)
    }
  })

force.on('tick', () => {
  collide(nodesParsed)

  node.attr('transform', d => {
    let pos = position(d, width, height)
    d.x = pos.x
    d.y = pos.y
    return pos.transform
  })

  link
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y)
})

function mouseover() {
  let point = d3.mouse(this)

  nodesParsed.push({
    pull: true,
    x: point[0],
    y: point[1],
    radius: 1
  })

  force.start()
}

function mouseout() {
  nodesParsed.pop()
  force.start()
}

function mousemove() {
  let last = nodesParsed[nodesParsed.length - 1],
    point = d3.mouse(this)

  let x = point[0],
    y = point[1]

  let stop = fixed.some(node => {
    let nx = node.x,
      ny = node.y,
      r = node.radius

    return (x >= nx - r) && (x < nx + r) && (y >= ny - r) && (y < ny + r)
  })

  if (!stop) {
    last.x = point[0]
    last.y = point[1]
  }

  force.resume()
}

runAnimation(force)