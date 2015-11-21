import d3 from 'd3'
import 'sugar'

import {nodes, links} from './data'
import {collide, position} from './physics'
import {run as runAnimation} from './animation'

let container = document.getElementsByClassName('container')[0]

let width = container.clientWidth,
  height = width * 900 / 1600

let nodesParsed = nodes.map((item, i) => {
  let radius = 50

  if (i === 0) {
    radius = 85
  } else if (i >= 20) {
    radius = 65
  }

  let props = {
    index: item.index,
    name: item.name,
    color: item.color,
    fixed: item.fixed,
    image: item.image,
    x: item.x / 100 * width,
    y: item.y / 100 * height,
    radius
  }

  return props
})

let force = d3.layout.force()
  .gravity(0)
  .friction(0.05)
  .linkDistance(d => 230 * (d.distance || 1))
  .linkStrength(0.5)
  .size([width, height])

let svg = d3.select('.container').append('svg')
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
  .style('stroke-width', d => d.strength)

let node = svg.selectAll('.node')
  .data(nodesParsed)
  .enter().append('g')
  .attr('class', 'node')
  .call(force.drag)

node.filter(d => d.image)
  .append('image')
  .attr('xlink:href', d => `images/${d.image}`)
  .attr('x', d => -d.radius)
  .attr('y', d => -d.radius)
  .attr('width', d => d.radius * 2)
  .attr('height', d => d.radius * 2)

node.filter(d => !d.image)
  .append('circle')
  .attr('r', d => d.radius)
  .style('fill', d => d.color)
  .style('stroke', d => d3.rgb(d.color).darker())

node.filter(d => !d.image)
  .append('text')
  .attr('class', d => (d.index === 0) ? 'label main' : 'label')
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
  let q = d3.geom.quadtree(nodesParsed),
    i = 0,
    n = nodesParsed.length

  while (++i < n) {
    q.visit(collide(nodesParsed[i]))
  }

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

runAnimation(force)