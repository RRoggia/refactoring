function score( candidate, medicalExam, scoringGuide ) {
  let result = 0
  let healthLevel = 0
  let highMedicalRiskFlag = false

  if( medicalExam.isSmoker ) {
    healthLevel += 10
    highMedicalRiskFlag = true
  }

  let certificationGrade = "regular"
  if( scoringGuide.stateWithLowCertification( candidate.origin ) ) {
    certificationGrade = "low"
    result -= 5
  }

  //lots more code like this
  result -= Math.max( healthLevel - 5, 0 )
  return result
}

const candidate = { origin: 'RS' }
const medicalExam = { isSmoker: true }
const scoringGuide = { stateWithLowCertification: (o) => [ 'RS', 'MS', 'RJ' ].find( s => s == o ) }
console.log( score( candidate, medicalExam, scoringGuide ) )