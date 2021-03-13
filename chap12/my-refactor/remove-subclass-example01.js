class Person {
  constructor( name, genderCode ) {
    this._name = name
    this._genderCode = genderCode
  }
  get name() {
    return this._name
  }
  get genderCode() {
    return this._genderCode
  }
}

function createPerson( name, type ) {
  if( type ) {
    return new Person(name, type )
  } else {
    return new Person( name, 'X' )
  }
}

console.log( createPerson( '', 'F' ).genderCode )
console.log( createPerson( '', 'M' ).genderCode )
console.log( createPerson( 'Martin').genderCode )