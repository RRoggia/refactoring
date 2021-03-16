function inNewEngland( aCustomer ) {
  return [ 'MA', 'CT', 'ME', 'VT', 'NH', 'RI' ].includes( aCustomer.address.state )
}

const someCustomers = [
  { address: { state: 'RS'}, },
  { address: { state: 'ME'}, },
  { address: { state: 'CT'}, },
  { address: { state: 'RS'}, },
  { address: { state: 'RI'}, },
]
const newEnglanders = someCustomers.filter( c => inNewEngland( c ) )
console.log( newEnglanders )