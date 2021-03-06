class Score {
  constructor( candidate, medicalExam, scoringGuide ) {
    this._candidate = candidate
    this._medicalExam = medicalExam
    this._scoringGuide = scoringGuide
  }
  execute() {
    this._result = 0
    this._healthLevel = 0
    this._highMedicalRiskFlag = false

    this.scoreSmoking()

    this._certificationGrade = "regular"
    if( this._scoringGuide.stateWithLowCertification( this._candidate.origin ) ) {
      this._certificationGrade = "low"
      this._result -= 5
    }

    //lots more code like this
    this._result -= Math.max( this._healthLevel - 5, 0 )
    return this._result
  }

  scoreSmoking() {
    if( this._medicalExam.isSmoker ) {
      this._healthLevel += 10
      this._highMedicalRiskFlag = true
    }
  }
}
const candidate = { origin: 'RS' }
const medicalExam = { isSmoker: true }
const scoringGuide = { stateWithLowCertification: (o) => [ 'RS', 'MS', 'RJ' ].find( s => s == o ) }
console.log( new Score( candidate, medicalExam, scoringGuide ).execute() )