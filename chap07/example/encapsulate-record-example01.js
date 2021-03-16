const organization = { name: 'Acme Gooseberries', country: 'GB' }

function getRawDataOfOrganization() {
  return organization
}

function createHTML() {
  let result = '<body>'
  result += `<h1>${ getRawDataOfOrganization().name }</h1>`
  result += '</body>'
  return result
}

function changeOrganizationName( name ){
  getRawDataOfOrganization().name = name
}

console.log( organization )
console.log( createHTML() )
changeOrganizationName( 'ACME Gooseberries')
console.log( organization )