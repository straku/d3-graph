import 'sugar'

import d3 from 'd3'

import {nodes, links} from './data'
import {collide, position} from './physics'
import {run as runAnimation} from './animation'
import config from './graph-config'

let $graph = document.getElementById('graph')

let fixedWidth = 1600,
  fixedHeight = 900

let width = $graph.clientWidth,
  scale = width / fixedWidth,
  height = scale * fixedHeight

let fixed = []

let nodesParsed = nodes.map((item, i) => {
  let radius = config.graph.radius.secondary

  if (i === 0) {
    radius = config.graph.radius.main
  } else if (item.image) {
    radius = config.graph.radius.faces
  }

  let x = item.x / 100 * fixedWidth,
    y = item.y / 100 * fixedHeight

  if (item.fixed) {
    fixed.push({x, y, radius})
  }

  let props = Object.assign({}, item)

  props.x = x
  props.y = y
  props.radius = radius

  return props
})

let force = d3.layout.force()
  .gravity(0)
  .friction(config.graph.friction)
  .linkDistance(d => config.graph.linkDistance * (d.distance || 1))
  .charge(d => (d.pull) ? config.graph.pullStrength : 0)
  .linkStrength(config.graph.linkStrength)
  .size([fixedWidth, fixedHeight])

let svg = d3.select('#graph').append('svg')
  .attr('width', width)
  .attr('height', height)
  .on('mouseover', mouseover)
  .on('mouseout', mouseout)
  .on('mousemove', mousemove)

let container = svg.append('g')
  .attr('width', fixedWidth)
  .attr('height', fixedHeight)

container.append('rect')
  .attr('class', 'background')
  .attr('width', fixedWidth)
  .attr('height', fixedWidth)

force
  .nodes(nodesParsed)
  .links(links)
  .start()

let link = container.selectAll('.link')
  .data(links)
  .enter().append('line')
  .attr('class', 'link')
  .attr('pointer-events', 'none')
  .style('stroke-width', d => d.strength)

let node = container.selectAll('.node')
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

node.filter(d => d.image)
  .append('text')
  .attr('class', 'label-image')
  .attr('pointer-events', 'none')
  .each(function (d) {
    let text = d3.select(this),
      anchor = 'start',
      x, y

    switch (d.placement) {
      case 'left':
        x = -(d.radius + 10)
        y = d.radius * (d.top / 50 - 1)
        anchor = 'end'
        break
      case 'right':
        x = d.radius + 10
        y = d.radius * (d.top / 50 - 1)
        break
      case 'bottom':
        x = -(d.radius - 5)
        y = d.radius + 10
        break
    }

    text
      .attr('text-anchor', anchor)
      .attr('x', x)
      .attr('y', y)
      .attr('dy', '.71em')
      .append('tspan')
      .attr('class', 'name')
      .text(d.name)

    d.description.forEach((item, i) => {
      text.append('tspan')
        .attr('class', (i === 2) ? 'desc strong' : 'desc')
        .attr('x', x)
        .attr('y', y)
        .attr('dy', `${(i + 1) * 1.2 + 0.71}em`)
        .text(item)
    })
  })

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
    let pos = position(d, fixedWidth, fixedHeight)
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

function zoom(scale) {
  container.attr('transform', `scale(${scale})`)
}

function mouseover() {
  let point = d3.mouse(this)

  nodesParsed.push({
    pull: true,
    x: point[0] * (1 / scale),
    y: point[1] * (1 / scale),
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

  let x = point[0] * (1 / scale),
    y = point[1] * (1 / scale)

  let stop = fixed.some(node => {
    let nx = node.x,
      ny = node.y,
      r = node.radius

    return (x >= nx - r) && (x < nx + r) && (y >= ny - r) && (y < ny + r)
  })

  if (!stop) {
    last.x = point[0] * (1 / scale)
    last.y = point[1] * (1 / scale)
  }

  force.resume()
}

function resize() {
  let w = $graph.clientWidth,
    scale = w / fixedWidth

  svg
    .attr('width', w)
    .attr('height', scale * fixedHeight)

  zoom(scale)
}

zoom(scale)

window.addEventListener('resize', resize.debounce(250), false)

runAnimation(force)