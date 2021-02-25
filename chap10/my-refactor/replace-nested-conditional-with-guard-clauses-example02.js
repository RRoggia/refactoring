function adjustedCapital( anInstrument ) {
  if ( anInstrument.capital <= 0 || anInstrument.interestRate <= 0 || anInstrument.duration <= 0 ) {
    return 0
  }
  return ( anInstrument.income / anInstrument.duration ) * anInstrument.adjustmentFactor
}

console.log( adjustedCapital( {
  capital: 5000,
  interestRate: 0.5,
  duration: 1,
  income: 3102,
  adjustmentFactor: 0.3
} ) )
