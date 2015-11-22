import d3 from 'd3'

function singleCollide(node) {
  let r = node.radius,
    nx1 = node.x - r,
    nx2 = node.x + r,
    ny1 = node.y - r,
    ny2 = node.y + r

  return function (quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      let x = node.x - quad.point.x,
        y = node.y - quad.point.y,
        l = Math.sqrt(x * x + y * y),
        r = node.radius + quad.point.radius

      if (l < r) {
        l = (l - r) / l * .5
        node.x -= x *= l
        node.y -= y *= l
        quad.point.x += x
        quad.point.y += y
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1
  }
}

export function collide(nodes) {
  let q = d3.geom.quadtree(nodes),
    i = 0,
    n = nodes.length

  while (++i < n) {
    q.visit(singleCollide(nodes[i]))
  }
}

export function position(d, width, height) {
  let x = Math.max(d.radius, Math.min(width - d.radius, d.x)),
    y = Math.max(d.radius, Math.min(height - d.radius, d.y))

  return {
    x, y, transform: `translate(${x},${y})`
  }
}