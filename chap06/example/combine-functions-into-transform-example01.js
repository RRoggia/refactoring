const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }

function baseRate( month, year ) {
  return ( year + month ) * 0.1
}

function acquireReading() {
  return reading
}

function taxThreshold( year ) {
  return year - 100
}

function calculateBaseCharge() {
  const aReading = acquireReading()
  const baseCharge = baseRate( aReading.month, aReading.year ) * aReading.quantity
  return baseCharge
}

function calculateTaxableCharge() {
  const aReading = acquireReading()
  const base = baseRate( aReading.month, aReading.year ) * aReading.quantity
  const taxableCharge = Math.max( 0, base - taxThreshold( aReading.year ) )
  return taxableCharge
}

function calculateBaseChargeAmount() {
  const aReading = acquireReading()
  const basicChargeAmount = calculateBaseCharge( aReading )
  function calculateBaseCharge( aReading ) {
    return baseRate( aReading.month, aReading.year ) * aReading.quantity
  }
  return basicChargeAmount
}

console.log( `Client 1: ${ calculateBaseCharge() }` )
console.log( `Client 2: ${ calculateTaxableCharge() }` )
console.log( `Client 3: ${ calculateBaseChargeAmount() }` )
