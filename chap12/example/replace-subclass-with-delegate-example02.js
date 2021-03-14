function createBird( data ) {
  switch ( data.type ) {
    case 'EuropeanSwallow':
      return new EuropeanSwallow( data )
    case 'AfricanSwallow':
      return new AfricanSwallow( data )
    case 'NorweigianBlueParrot':
      return new NorwegianBlueParrot( data )
    default:
      return new Bird( data )
  }
}

class Bird {
  constructor( data ) {
    this._name = data.name
    this._plumage = data.plumage
  }
  get name() { 
    return this._name
  }
  get plumage() {
    return this._plumage || "average"
  }
  get airSpeedVelocity() {
    return null
  }
}

class EuropeanSwallow extends Bird {
  get airSpeedVelocity() {
    return 35
  }
}

class AfricanSwallow extends Bird {
  constructor( data ) {
    super ( data )
    this._numberOfCoconuts = data.numberOfCoconuts
  }
  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts
  }
}

class NorwegianBlueParrot extends Bird {
  constructor( data ) {
    super ( data )
    this._voltage = data.voltage
    this._isNailed = data.isNailed
  }
  get plumage() {
    if (this._voltage > 100) {
      return "scorched"
    } else {
      return this._plumage || "beautiful"
    }
  }
  get airSpeedVelocity() {
    return ( this._isNailed ) ? 0 : 10 + this._voltage / 10
  }
}

const europeanSwallow = createBird( { type: 'EuropeanSwallow', name: 'Martin' } )
const africanSwallow = createBird( { type: 'AfricanSwallow', name: 'Fowler', numberOfCoconuts: 3 } )
const norweigianBlueParrot = createBird( { type: 'NorweigianBlueParrot', voltage: 220, isNailed: false } )

console.log( europeanSwallow.airSpeedVelocity )
console.log( europeanSwallow.plumage )

console.log( africanSwallow.airSpeedVelocity )
console.log( africanSwallow.plumage )

console.log( norweigianBlueParrot.airSpeedVelocity )
console.log( norweigianBlueParrot.plumage )