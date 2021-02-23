class Organization {
  constructor( data ) {
    this._title = data.title
    this._country = data.country
  }

  get title() {
    return this._title
  }

  set title( title ) {
    this._title = title
  }

  get country() {
    return this._country
  }

  set country( country ) {
    this._country = country
  }

  toString() {
    return `{ name: ${ this.title }, country: ${ this.country } }`
  }
}

const organization = new Organization( { title: 'Acme Gooseberries', country: 'GB' } )
console.log( organization.toString() )