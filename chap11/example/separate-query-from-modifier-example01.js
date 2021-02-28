function alertForMiscreant ( people ) {
  for ( const p of people ) {
    if ( p === "Don" ) {
      setOffAlarms()
      return "Don"
    }
    if ( p === "John" ) {
      setOffAlarms()
      return "John"
    }
  }
  return ""
}

function setOffAlarms() {
  console.log( 'alarms off' )
}

console.log( alertForMiscreant( [ 'Martin', 'Fowler', 'Don' ] ) )