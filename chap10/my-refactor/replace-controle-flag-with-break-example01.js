function hasDonOrJohn( people ) {
  return people.some( p => [ 'Don', 'John' ].includes( p ) )
}

function sendAlert() {
  console.log( 'found' )
}

console.log( hasDonOrJohn( [ 'Martin', 'Fowler', 'John'] ) )