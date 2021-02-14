function reportLines( aCustomer ) {
  const lines = []
  lines.push( [ 'name', aCustomer.name ] )
  lines.push( [ 'location', aCustomer.location ] )
  return lines
}

const customerA = {
  name: 'Fowler',
  location: 'Porto Alegre'
}

console.log( reportLines( customerA ) )