class Bird {
  constructor( data ) {
    this._name = data.name
    this._plumage = data.plumage
    this._specie = this.createBirdSpecie( data )
  }
  get name() { 
    return this._name
  }
  get plumage() {
    return ( this.specie.plumage )
      ? this.specie.plumage
      : this._plumage || "average"
  }
  get airSpeedVelocity() {
    return ( this.specie.airSpeedVelocity ) 
      ? this.specie.airSpeedVelocity
      : undefined
  }

  get specie() {
    return this._specie
  }

  createBirdSpecie( data ) {
    switch ( data.type ) {
      case 'EuropeanSwallow':
        return new EuropeanSwallowDelegate()
      case 'AfricanSwallow':
        return new AfricanSwallowDelegate( data.numberOfCoconuts )
      case 'NorweigianBlueParrot':
         return new NorwegianBlueParrotDelegate( data.isNailed, data.voltage )
      default:
        return new Bird( data )
    }
  }
}

class EuropeanSwallowDelegate {
  get airSpeedVelocity() {
    return 35
  }
}

class AfricanSwallowDelegate {
  constructor( numberOfCoconuts ) {
    this._numberOfCoconuts = numberOfCoconuts
  }
  get numberOfCoconuts() {
    return this._numberOfCoconuts
  }
  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts
  }
}

class NorwegianBlueParrotDelegate {
  constructor( isNailed, voltage ) {
    this._isNailed = isNailed
    this._voltage = voltage
  }
  get isNailed() {
    return this._isNailed
  }
  get voltage() {
    return this._voltage
  }
  get airSpeedVelocity() {
    return ( this.isNailed ) ? 0 : 10 + this.voltage / 10
  }

  get plumage() {
    if (this._voltage > 100) {
      return "scorched"
    } else {
      return this._plumage || "beautiful"
    }
  }
}

const europeanSwallow = new Bird( { type: 'EuropeanSwallow', name: 'Martin' } )
const africanSwallow = new Bird( { type: 'AfricanSwallow', name: 'Fowler', numberOfCoconuts: 3 } )
const norweigianBlueParrot = new Bird( { type: 'NorweigianBlueParrot', voltage: 220, isNailed: false } )

console.log( europeanSwallow.airSpeedVelocity )
console.log( europeanSwallow.plumage )

console.log( africanSwallow.airSpeedVelocity )
console.log( africanSwallow.plumage )

console.log( norweigianBlueParrot.airSpeedVelocity )
console.log( norweigianBlueParrot.plumage )