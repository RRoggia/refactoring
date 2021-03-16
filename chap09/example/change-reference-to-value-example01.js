class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber()
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode
  }

  set officeAreaCode( areaCode ) {
    this._telephoneNumber.areaCode = areaCode
  }

  get officeNumber() {
    return this._telephoneNumber.number
  }

  set officeNumber( number ) {
    this._telephoneNumber.number = number
  }
}

class TelephoneNumber {
  get areaCode() {
    return this._areaCode
  }

  set areaCode( arg ) {
    this._areaCode = arg
  }

  get number() {
    return this._number
  }

  set number( arg ) {
    this._number = arg
  }
}

const person = new Person()
person.officeAreaCode = 10
person.officeNumber = 123456789

console.log( person )