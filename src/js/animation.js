import config from './graph-config'
let {animation} = config

import {links} from './data'

let params = []

for(let i = 0, k = links.length; i < k; i++) {
  params.push(Number.random(-10, 10))
}

//let period = 100

//let force = null

let Type = {
  CONTRACTION: 1,
  RELAXATION: 2
}


let force = null

let animate = () => {
  //if (Number.random(1,50) === 1) {
  //  console.log('mix')
  //  params = params.map(item => {
  //    return item * (-1 * Number.random())
  //  })
  //}
  let change = Math.sin(Math.PI / 2000 * (+new Date()))
  force.linkDistance((d, i) => {
    return 230 * (d.distance || 1) + params[i] * change
  })
  force.start()
  animate.delay(100)
}

//let animate = (force, type) => {
//  force.linkDistance(d => {
//    return 230 * (d.distance || 1) + Number.random(-5, 5)
//  })
//  force.start()
//  animate.delay(50, force)
  //let relativeStrentgh = animation.strength * animation.contractionTime / animation.relaxationTime
  //switch (type) {
  //  case Type.CONTRACTION:
  //    force.charge(animation.strength)
  //    force.start()
  //    animate.delay(animation.contractionTime, force, Type.RELAXATION)
  //    break
  //  case Type.RELAXATION:
  //    force.charge(-relativeStrentgh)
  //    force.start()
  //    animate.delay(animation.relaxationTime, force, Type.CONTRACTION)
  //    break
  //}
//}

export let run = _force => {
  force = _force
  animate.delay(500)
  //d3.timer(animate)
}