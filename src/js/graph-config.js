export default {
  graph: {
    // d3.layout.force parameters, definition: https://github.com/mbostock/d3/wiki/Force-Layout
    linkDistance: 230,
    linkStrength: 0.3,
    friction: 0.05,

    // application specific parameters
    pullStrength: 20000,     // mouse pull strength
    radius: {
      main: 85,
      faces: 65,
      secondary: 50
    }
  },
  animation: {
    amplitudeRange: [5, 20],  // [5,20] will mean that every link between nodes can oscilate with amplitude randomly
                              // selected from range [5, 20]
    period: 2000,             // oscillation period [ms], the longer period means slower oscillations
    startDelay: 500           // animation start delay [ms], needed for graph to stabilize before applying animation
  }
}