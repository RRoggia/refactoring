function appliesToMass( states ) {
  return states.includes( 'MA' )
}

console.log( appliesToMass( [ 'MA', 'RS', 'DK', 'BR' ] ) )

