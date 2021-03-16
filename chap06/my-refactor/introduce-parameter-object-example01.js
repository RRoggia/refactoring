class NumberRange {
  constructor( min, max ) {
    this._min = min
    this._max = max
  }

  get min() {
    return _min
  }

  set max( newMax ) {
    this._max = newMax
  }

  contains( value ) {
    return value >= this._min && value <= this._max
  }
}

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ]
}

function readingsOutsideRange( station, range ) {
  return station
    .readings.filter( r => !range.contains( r.temp ) )
}

const operatingPlan = {
  temperatureFloor: 48,
  temperatureCeiling: 55
}

const range = new NumberRange( 
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
)

const alerts = readingsOutsideRange( 
  station,
  range
)

console.log( alerts )