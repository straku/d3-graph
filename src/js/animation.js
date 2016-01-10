import config from './graph-config'
const {animation, graph} = config

import {links} from './data'

const params = links.map(() => {
  const change = Number.random(animation.amplitudeRange[0], animation.amplitudeRange[1])
  return Number.random() ? change : -change
})

let force = null

function animate () {
  const change = Math.sin(Math.PI / (2 * animation.period) * (+new Date()))
  force.linkDistance((d, i) => {
    return graph.linkDistance * (d.distance || 1) + params[i] * change
  })
  force.start()
  animate.delay(100)
}

export function run (_force) {
  force = _force
  animate.delay(animation.startDelay)
}