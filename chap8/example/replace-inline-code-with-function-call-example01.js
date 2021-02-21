function appliesToMass( states ) {
  let appliesToMass = false

  for( const s of states ) {
    if( s === 'MA' ) appliesToMass = true
  }

  return appliesToMass
}

console.log( appliesToMass( [ 'MA', 'RS', 'DK', 'BR' ] ) )

