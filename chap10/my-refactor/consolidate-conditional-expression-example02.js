function calculateBonusRate( anEmployee ) {
  const fullRate = 1
  const halfRate = 0.5
  return anEmployee.onVacation && anEmployee.seniority > 10 ? fullRate : halfRate
}

console.log( calculateBonusRate( { onVacation: true, seniority: 12 } ) )
