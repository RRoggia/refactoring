class Person {
  constructor( name, officeAreaCode, officeNumber ) {
    this._name = name
    this._officeAreaCode = officeAreaCode
    this._officeNumber = officeNumber
  }

  get name() {
    return this._name
  }

  set name( newName ) {
    this._name = newName
  }
  get telephoneNumber() {
    return `(${ this.officeAreaCode }) ${ this.officeNumber }` 
  }

  get officeAreaCode() {
    return this._officeAreaCode
  }

  set officeAreaCode( newOfficeAreaCode ) {
    this._officeAreaCode = newOfficeAreaCode
  }

  get officeNumber() {
    return this._officeNumber
  }

  set officeNumber( newOfficeNumber ) {
    this._officeNumber = newOfficeNumber
  }
}

const person = new Person( 'Martin', '10', '123456789')
console.log( person.name )
console.log( person.telephoneNumber )

person.officeAreaCode = '20'
console.log( person.telephoneNumber )

person.officeNumber = '987654321'
console.log( person.telephoneNumber )