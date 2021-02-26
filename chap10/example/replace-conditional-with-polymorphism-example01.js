function plumages( birds ) {
  return new Map( birds.map( b => [ b.name, plumage( b ) ] ) )
}
function speeds( birds ) {
  return new Map( birds.map( b => [ b.name, airSpeedVelocity( b ) ] ) ) 
}
function plumage( bird ) {
  switch ( bird.type ) {
  case 'EuropeanSwallow':
    return "average"
  case 'AfricanSwallow':
    return ( bird.numberOfCoconuts > 2 ) ? "tired" : "average"
  case 'NorwegianBlueParrot':
    return ( bird.voltage > 100 ) ? "scorched" : "beautiful"
  default:
    return "unknown"
  }
}

function airSpeedVelocity( bird ) {
  switch ( bird.type ) {
  case 'EuropeanSwallow':
    return 35
  case 'AfricanSwallow':
    return 40 - 2 * bird.numberOfCoconuts
  case 'NorwegianBlueParrot':
    return ( bird.isNailed ) ? 0 : 10 + bird.voltage / 10
  default:
    return null
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