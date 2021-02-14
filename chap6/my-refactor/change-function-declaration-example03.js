function inNewEngland( state ) {
  return [ 'MA', 'CT', 'ME', 'VT', 'NH', 'RI' ].includes( state )
}

const someCustomers = [
  { address: { state: 'RS'}, },
  { address: { state: 'ME'}, },
  { address: { state: 'CT'}, },
  { address: { state: 'RS'}, },
  { address: { state: 'RI'}, },
]
const newEnglanders = someCustomers.filter( c => inNewEngland( c.address.state ) )
console.log( newEnglanders )