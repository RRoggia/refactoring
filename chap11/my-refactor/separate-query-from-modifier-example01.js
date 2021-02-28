function alertForMiscreant ( people ) {
  if( getMiscreant( people ) !== '' ) {
    setOffAlarms()
  }
}

function getMiscreant ( people ) {
  for ( const p of people ) {
    if ( p === "Don" ) {
      return "Don"
    }
    if ( p === "John" ) {
      return "John"
    }
  }
  return ""
}

function setOffAlarms() {
  console.log( 'alarms off' )
}

const people = [ 'Martin', 'Fowler', 'Don' ]
alertForMiscreant( people )
console.log( getMiscreant( people ) )
