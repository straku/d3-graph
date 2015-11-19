import config from './graph-config'
let {animation} = config

let Type = {
  CONTRACTION: 1,
  RELAXATION: 2
}

let animate = (force, type) => {
  switch (type) {
    case Type.CONTRACTION:
      force.charge(animation.strength)
      force.start()
      animate.delay(animation.contractionTime, force, Type.RELAXATION)
      break
    case Type.RELAXATION:
      force.charge(-animation.strength)
      force.start()
      animate.delay(animation.relaxationTime, force, Type.CONTRACTION)
      break
  }
}

export let run = force => {
  animate.delay(animation.contractionTime, force, Type.CONTRACTION)
}