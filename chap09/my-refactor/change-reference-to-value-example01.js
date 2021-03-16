class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber()
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode
  }

  set officeAreaCode( areaCode ) {
    this._telephoneNumber = new TelephoneNumber( areaCode, this._telephoneNumber.number )
  }

  get officeNumber() {
    return this._telephoneNumber.number
  }

  set officeNumber( number ) {
    this._telephoneNumber = new TelephoneNumber( this._telephoneNumber.areaCode, number )
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

  get number() {
    return this._number
  }

  equals( other ) {
    return this.areaCode === other.areaCode && this.number === other.number
  }
}

const person = new Person()
person.officeAreaCode = 10
person.officeNumber = 123456789

console.log( person )
console.log( new TelephoneNumber( 10, 123456789).equals( person._telephoneNumber ) )