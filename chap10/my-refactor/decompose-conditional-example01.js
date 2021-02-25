function calculateCharge( aDate, quantity, plan ) {
  if ( isSummer( aDate, plan ) ){
    return summerCharge( quantity, plan.summerRate )
  } else {
    return regularCharge( quantity, plan.regularRate, plan.regularServiceCharge )
  }
}

function isSummer( aDate, plan ) {
  return !aDate.isBefore( plan.summerStart ) && !aDate.isAfter( plan.summerEnd )
}

function summerCharge( quantity, rate ) {
  return quantity * rate
}

function regularCharge( quantity, rate, serviceCharge ) {
  return quantity * rate + serviceCharge
}

const plan = { 
  summerStart: new Date( '2000', '01', '01' ),
  summerEnd: new Date( '2000', '03', '01' ),
  summerRate: 0.5,
  regularRate: 1,
  regularServiceCharge: 30
}

function enhanceDate( date ) {
  return {
    isBefore: ( otherDate ) => + otherDate > + date,
    isAfter: ( otherDate) => + otherDate < + date
  }
}

console.log( calculateCharge( enhanceDate( new Date( '2000', '02', '20' ) ), 100, plan ) )
console.log( calculateCharge( enhanceDate( new Date( '2000', '10', '20' ) ), 100, plan ) )
