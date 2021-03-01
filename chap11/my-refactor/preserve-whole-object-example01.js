class HeatingPlan {
  constructor( data ) {
    this._temperatureRange = {
      low: data.low,
      high: data.high
    }
  }
  withinRange( temperatureRange ) {
    return ( temperatureRange.low >= this._temperatureRange.low ) && ( temperatureRange.high <= this._temperatureRange.high )
  }
}

const aRoom = {
  daysTempRange: {
    low: 10,
    high: 500
  }
}
const alerts = []
const aPlan = new HeatingPlan( { low: 30, high: 1000 } )
if ( !aPlan.withinRange( aRoom.daysTempRange ) ) {
  alerts.push("room temperature went outside range")
}
console.log( alerts )