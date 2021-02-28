function hasDonOrJohn( people ) {
  let found = false
  for ( const p of people ) {
    if ( ! found ) {
      if ( p === 'Don' ) {
        sendAlert()
        found = true
      }
      if ( p === 'John' ) {
        sendAlert()
        found = true
      }     
    }
  }
  return found
}

function sendAlert() {
  console.log( 'found' )
}

console.log( hasDonOrJohn( [ 'Martin', 'Fowler', 'John'] ) )