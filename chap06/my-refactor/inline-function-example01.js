function rating( aDriver ) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1
}

const driverA = {
  numberOfLateDeliveries: 5
}

const driverB = {
  numberOfLateDeliveries: 6
}

console.log( `Driver A:  ${ rating( driverA ) }` )
console.log( `Driver B:  ${ rating( driverB ) }` )
