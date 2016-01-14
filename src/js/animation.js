import _ from 'lodash'

import config from './graph-config'
const {animation} = config

import {links} from './data'

const ratio = Math.PI / (2 * animation.period)

const params = links.map(() => {
  const change = _.random(animation.amplitudeRange[0], animation.amplitudeRange[1])
  return _.random() ? change : -change
})

function animate (force) {
  force.linkDistance((d, i) => {
    return d.distance + params[i] * Math.sin(ratio * performance.now())
  })
  force.start()
}

export function run (force) {
  _.delay(() => {
    setInterval(() => animate(force), 100)
  }, animation.startDelay)
}