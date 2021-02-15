class Person {
  constructor( name, officeAreaCode, officeNumber ) {
    this._name = name
    this._telephoneNumber = new TelephoneNumber( officeAreaCode, officeNumber )
  }

  get name() {
    return this._name
  }

  set name( newName ) {
    this._name = newName
  }
  get telephoneNumber() {
    return this._telephoneNumber.toString()
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode
  }

  set officeAreaCode( newOfficeAreaCode ) {
    this._telephoneNumber.areaCode = newOfficeAreaCode
  }

  get officeNumber() {
    return this._telephoneNumber.number
  }

  set officeNumber( newOfficeNumber ) {
    this._telephoneNumber.number = newOfficeNumber
  }
}

class TelephoneNumber {
  constructor( areaCode, number ) {
    this._areaCode = areaCode
    this._number = number
  }

  get areaCode() {
    return this._areaCode
  }

  set areaCode( newAreaCode ) {
    this._areaCode = newAreaCode
  }

  get number() {
    return this._number
  }

  set number( newNumber ) {
    this._number = newNumber
  }

  toString() {
    return `(${ this.areaCode }) ${ this.number }` 
  }
}

const person = new Person( 'Martin', '10', '123456789')
console.log( person.name )
console.log( person.telephoneNumber )

person.officeAreaCode = '20'
console.log( person.telephoneNumber )

person.officeNumber = '987654321'
console.log( person.telephoneNumber )