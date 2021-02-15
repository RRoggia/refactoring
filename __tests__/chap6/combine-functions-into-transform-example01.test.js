const _ = require( 'lodash' )
const { enrichReading } = require( '../../chap6/my-refactor/combine-functions-into-transform-example01' )

test( 'check reading unchanged', () => {
  const baseReading = { customer: 'ivan', quantity: 15, month: 5, year: 2017 }
  const oracle = _.cloneDeep( baseReading )
  enrichReading( baseReading )
  expect( oracle ).toEqual( baseReading )
} )