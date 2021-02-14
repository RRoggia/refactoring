const Producer = require('../../chap4/producer.js')
const Province =  require( '../../chap4/province.js' )
const sampleProvinceData = require( '../../chap4/sampleProvinceData.js' )

describe( 'province', () => {
  let asia
  
  beforeEach(() => {
    asia = new Province( sampleProvinceData() )
  } )

  test( 'shortfall', () => {
    expect( asia.shortfall ).toBe( 5 )
  } )

  test( 'zero demand', () => {
    asia.demand = 0
    expect( asia.shortfall ).toBe( -25 )
    expect( asia.profit ).toBe( 0 )
  } )

  test( 'negative demand', () => {
    asia.demand = -1
    expect( asia.shortfall ).toBe( -26 )
    expect( asia.profit ).toBe( -10 )
  } )

  test( 'change production', () => {
    asia.producers[ 0 ].production = 20
    expect( asia.shortfall ).toBe( -6 )
    expect( asia.profit ).toBe( 292 )
  } )

  test( 'empty string demand', () => {
    asia.demand = ""
    expect( asia.shortfall ).toBeNaN()
    expect( asia.profit ).toBeNaN()
  } )

} )

describe( 'No producers', () => {
  let noProducers

  beforeEach( () => {
    const data = {
      name: "No Producers",
      producers: [],
      demand: 30,
      price: 20
    }
    noProducers = new Province( data )
  } )

  test( 'shortfall', () => {
    expect( noProducers.shortfall ).toBe( 30 )
  } )

  test( 'profit', () => {
    expect( noProducers.profit ).toBe( 0 )
  } )
} )

describe( 'string for producers', () => {
  test( '', () => {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      price: 20
    }
    const prov = new Province( data )
    expect( prov.shortfall ).toBe( 0 )
  } )
} )