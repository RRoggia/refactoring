function calculateBonusRate( anEmployee ) {
  if ( anEmployee.onVacation ) {
    if ( anEmployee.seniority > 10 ) {
      return 1
    }
  }
  return 0.5 
}

console.log( calculateBonusRate( { onVacation: true, seniority: 12 } ) )
