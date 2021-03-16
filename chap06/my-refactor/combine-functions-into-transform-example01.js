const _ = require( 'lodash' )

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }

function enrichReading( reading ) {
  const result = _.cloneDeep( reading )
  result.baseCharge = calculateBaseCharge( result )
  result.taxableCharge = calculateTaxableCharge( result )
  return result

  function calculateBaseCharge( aReading ) {
    return baseRate( aReading.month, aReading.year ) * aReading.quantity
  }

  function baseRate( month, year ) {
    return ( year + month ) * 0.1
  }

  function calculateTaxableCharge( aReading ) {
    return Math.max( 0, aReading.baseCharge - taxThreshold( aReading.year ) )
  }

  function taxThreshold( year ) {
    return year - 100
  }
  
}

function acquireReading() {
  return reading
}

function calculateBaseCharge() {
  const rawReading = acquireReading()
  const aReading = enrichReading( rawReading )
  return aReading.baseCharge
}

function calculateTaxableCharge() {
  const rawReading = acquireReading()
  const aReading = enrichReading( rawReading )
  return aReading.taxableCharge
}

function calculateBaseChargeAmount() {
  const rawReading = acquireReading()
  const aReading = enrichReading( rawReading )
  return aReading.baseCharge
}

console.log( `Client 1: ${ calculateBaseCharge() }` )
console.log( `Client 2: ${ calculateTaxableCharge() }` )
console.log( `Client 3: ${ calculateBaseChargeAmount() }` )

module.exports = {
  enrichReading
}