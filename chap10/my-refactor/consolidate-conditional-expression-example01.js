function disabilityAmount( anEmployee ) {
  if ( isNotEligibleForDisability( anEmployee ) ) {
    return 0
  }
  return 300
}

function isNotEligibleForDisability( anEmployee ) {
  return anEmployee.seniority < 2
  || anEmployee.monthsDisabled > 12
  || anEmployee.isPartTime
}

const employee = {
  seniority: 5,
  monthsDisabled: 3,
  isPartTime: false
}

console.log( disabilityAmount( employee ) )