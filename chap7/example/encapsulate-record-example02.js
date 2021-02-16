const customerData = {
  '1920': {
    name: 'Martin',
    id: '1920',
    usages: {
      '2016': {
        '1': 50,
        '2': 55,
        '3': 43,
        '4': 22,
        '5': 72,
        '6': 60,
        '7': 51,
        '8': 52,
        '9': 54,
        '10': 45,
        '11': 35,
        '12': 55
      },
      '2015': {
        '1': 70,
        '2': 63,
        '3': 55,
        '4': 55,
        '5': 54,
        '6': 53,
        '7': 50,
        '8': 49,
        '9': 45,
        '10': 40,
        '11': 55,
        '12': 53,

      }
    }
  },
  '38673': {
    name: 'Neal',
    id :'38673',
    usages: {
      '2021': {
        '1': 60
      }
    }
  }
}

function updateAmount( customerID, year, month, amount ) {
  customerData[ customerID ].usages[ year ][ month ] = amount
}

function compareUsage( customerID, laterYear, month ) {
  const later = customerData[ customerID ].usages[ laterYear ][ month ]
  const earlier = customerData[ customerID ].usages[ laterYear - 1 ][ month ]
  return { 
    laterAmount: later,
    change: later - earlier
  }
}

console.log( `Customer 1920, Jan 2016: ${ customerData[ '1920' ].usages[ '2016' ][ '1' ] }` )
updateAmount( '1920', '2016', '1', 40 )
console.log( `Customer 1920, Jan 2016: ${ customerData[ '1920' ].usages[ '2016' ][ '1' ] }` )
const { laterAmount, change } = compareUsage( '1920', '2016', '1' )
console.log( `Compare Jan 2016 and 2015: Latest is ${ laterAmount } and diff of ${ change }` )