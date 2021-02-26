function plumages( birds ) {
  return new Map( birds
    .map( b => createBird( b ) )
    .map( b => [ b.name, b.plumage() ] ) 
  )
}
function speeds( birds ) {
  return new Map( birds
    .map( b => createBird( b ) )
    .map( b => [ b.name, b.airSpeedVelocity() ] ) 
  )
}

function createBird( bird ) {
  switch ( bird.type ) {
  case 'EuropeanSwallow':
    return EuropeanSwallow( bird )
  case 'AfricanSwallow':
    return AfricanSwallow( bird )
  case 'NorwegianBlueParrot':
    return NorwegianBlueParrot( bird )
  default:
    return UnknownBird( bird )
  }

  function EuropeanSwallow( bird ) {
    return _createBird( bird, "average", 35 )
  }

  function AfricanSwallow( bird ) {
    const plumage = ( bird.numberOfCoconuts > 2 ) ? "tired" : "average"
    const airSpeedVelocity = 40 - 2 * bird.numberOfCoconuts
    return _createBird( bird, plumage, airSpeedVelocity )
  }

  function NorwegianBlueParrot( bird ){
    const plumage = ( bird.voltage > 100 ) ? "scorched" : "beautiful"
    const airSpeedVelocity = ( bird.isNailed ) ? 0 : 10 + bird.voltage / 10
    return _createBird( bird, plumage, airSpeedVelocity )
  }

  function UnknownBird( bird ) {
    _createBird( bird, 'unknown', null )
  }

  function _createBird( bird, plumage, airSpeedVelocity ) {
    return {
      ...bird,
      plumage: () => plumage,
      airSpeedVelocity: () => airSpeedVelocity
    }
  }
}

const europeanSwallow = { 
  name: 'bird1',
  type: 'EuropeanSwallow'
 }
const africanSwallow = {
  name: 'bird2',
  type: 'AfricanSwallow',
  numberOfCoconuts: 3
}
const norwegianBlueParrot = {
  name: 'bird3',
  type: 'NorwegianBlueParrot',
  isNailed: false,
  voltage: 230
}

const birds = [ europeanSwallow, africanSwallow, norwegianBlueParrot ]
console.log( plumages( birds ) )
console.log( speeds( birds ) )