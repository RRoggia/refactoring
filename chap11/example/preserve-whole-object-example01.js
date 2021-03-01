class HeatingPlan {
  constructor( data ) {
    this._temperatureRange = {
      low: data.low,
      high: data.high
    }
  }
  withinRange( bottom, top ) {
    return ( bottom >= this._temperatureRange.low ) && ( top <= this._temperatureRange.high )
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
const low = aRoom.daysTempRange.low
const high = aRoom.daysTempRange.high
if ( !aPlan.withinRange( low, high ) ) {
  alerts.push("room temperature went outside range")
}
console.log( alerts )