function distanceTravelled( scenario, time ) {
  let result
  const primaryAcceleration = scenario.primaryForce / scenario.mass
  let primaryTime = Math.min( time, scenario.delay )
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime
  let secondaryTime = time - scenario.delay
  if( secondaryTime > 0 ) {
    let primaryVelocity = primaryAcceleration * scenario.delay
    let secondaryAcceleration = ( scenario.primaryForce + scenario.secondaryForce ) / scenario.mass 
    result += primaryVelocity * secondaryTime + 0.5 * secondaryAcceleration * secondaryTime * secondaryTime
  }
  return result
}

const scenario = {
  primaryForce: 1,
  mass: 1,
  delay: 2,
  secondaryForce: 0.5
}

console.log( `distance travelled is ${ distanceTravelled( scenario, 3 ) } ` )