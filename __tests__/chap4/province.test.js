const Producer = require('../../chap4/producer.js')
const Province =  require( '../../chap4/province.js' )
const sampleProvinceDate = require('../../chap4/sampleProvinceData.js')
const sampleProvinceData = require( '../../chap4/sampleProvinceData.js' )

describe( 'province', () => {
  let asia
  
  beforeEach(() => {
    asia = new Province( sampleProvinceDate() )
  } )

  test( 'shortfall', () => {
    expect( asia.shortfall ).toBe( 5 )
  } )

  test( 'profit', () => {
    expect( asia.profit ).toBe( 230 )
  } )

} )