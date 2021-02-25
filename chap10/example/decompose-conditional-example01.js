function calculateCharge( aDate, quantity, plan ) {
  let charge
  if ( !aDate.isBefore( plan.summerStart ) && !aDate.isAfter( plan.summerEnd ) ){
    charge = quantity * plan.summerRate
  } else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge
  }
  return charge
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
