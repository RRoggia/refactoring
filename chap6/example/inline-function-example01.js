function rating( aDriver ) {
  return moreThanFiveLateDeliveries( aDriver ) ? 2 : 1
}

function moreThanFiveLateDeliveries( aDriver ) {
  return aDriver.numberOfLateDeliveries > 5
}

const driverA = {
  numberOfLateDeliveries: 5
}

const driverB = {
  numberOfLateDeliveries: 6
}

console.log( `Driver A:  ${ rating( driverA ) }` )
console.log( `Driver B:  ${ rating( driverB ) }` )

