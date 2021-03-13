class Person {
  constructor( name ) {
    this._name = name
  }
  get name() {
    return this._name
  }
  get genderCode() {
    return 'X'
  }
}

class Male extends Person {
  get genderCode() {
    return 'M'
  }
}

class Female extends Person {
  get genderCode() {
    return 'F'
  }
}

console.log( new Female().genderCode )
console.log( new Male().genderCode )
console.log( new Person( 'Martin' ).genderCode )