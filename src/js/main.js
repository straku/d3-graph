import d3 from 'd3'
import 'sugar'

import {nodes, links} from './data'
import {collide} from './physics'
import {run as runAnimation} from './animation'

let container = document.getElementsByClassName('container')[0],
  btn = document.getElementById('mix')

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
    x: item.x / 100 * width,
    y: item.y / 100 * height,
    radius
  }

  return props
})

let force = d3.layout.force()
  .gravity(0)
  .friction(0.05)
  .linkDistance(230)
  .linkStrength(0.5)
  .charge(-300)
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
  .enter().append('circle')
  .attr('class', 'node')
  .attr('r', d => d.radius)
  .style('fill', d => d.color)
  .style('stroke', d => d3.rgb(d.color).darker())
  .call(force.drag)

force.on('tick', () => {
  let q = d3.geom.quadtree(nodesParsed),
    i = 0,
    n = nodesParsed.length

  while (++i < n) {
    q.visit(collide(nodesParsed[i]))
  }

  node
    .attr('cx', d => d.x = Math.max(d.radius, Math.min(width - d.radius, d.x)))
    .attr('cy', d => d.y = Math.max(d.radius, Math.min(height - d.radius, d.y)))

  link
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y)
})

runAnimation(force)