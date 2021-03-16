class Organization {
  constructor( { name, country } ) {
    this._name = name
    this._country = country
  }

  get name() {
    return this._name
  }

  set name( aName ) {
    this._name = aName
  }

  get country() {
    return this._country
  }
}

const organization = new Organization( { name: 'Acme Gooseberries', country: 'GB' } )

function getOrganization() {
  return organization
}

function createHTML() {
  let result = '<body>'
  result += `<h1>${ getOrganization().name }</h1>`
  result += '</body>'
  return result
}

function changeOrganizationName( name ){
  getOrganization().name = name
}

console.log( organization )
console.log( createHTML() )
changeOrganizationName( 'ACME Gooseberries')
console.log( organization )