function disabilityAmount( anEmployee ) {
  if ( anEmployee.seniority < 2 ) {
    return 0
  }
  if ( anEmployee.monthsDisabled > 12 ) {
    return 0
  }
  if ( anEmployee.isPartTime ) {
    return 0 
  }
  return 300
}

const employee = {
  seniority: 5,
  monthsDisabled: 3,
  isPartTime: false
}

console.log( disabilityAmount( employee ) )