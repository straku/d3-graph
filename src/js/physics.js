import d3 from 'd3'

function singleCollide (node) {
  const r = node.radius

  return function (quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      const r = node.radius + quad.point.radius
      let x = node.x - quad.point.x
      let y = node.y - quad.point.y
      let l = Math.sqrt(x * x + y * y)

      if (l < r) {
        l = (l - r) / l * .5
        node.x -= x *= l
        node.y -= y *= l
        quad.point.x += x
        quad.point.y += y
      }
    }
    return x1 > node.x + r || x2 < node.x - r || y1 > node.y + r || y2 < node.y - r
  }
}

export function collide (nodes) {
  const q = d3.geom.quadtree(nodes)
  const n = nodes.length
  let i = 0

  while (++i < n) {
    q.visit(singleCollide(nodes[i]))
  }
}

export function position (d, width, height) {
  const x = Math.max(d.radius, Math.min(width - d.radius, d.x))
  const y = Math.max(d.radius, Math.min(height - d.radius, d.y))

  return {
    x, y, transform: `translate(${x},${y})`
  }
}