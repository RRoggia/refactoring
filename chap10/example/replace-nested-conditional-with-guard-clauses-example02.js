function adjustedCapital( anInstrument ) {
  let result = 0
  if ( anInstrument.capital > 0 ) {
    if ( anInstrument.interestRate > 0 && anInstrument.duration > 0 ) {
      result = ( anInstrument.income / anInstrument.duration ) * anInstrument.adjustmentFactor
    }
  }
  return result
}

console.log( adjustedCapital( {
  capital: 5000,
  interestRate: 0.5,
  duration: 1,
  income: 3102,
  adjustmentFactor: 0.3
} ) )
