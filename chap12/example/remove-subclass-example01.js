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

const female = new Female()
const male = new Male()
const person = new Person( 'Martin' )
const people = [ female, male, person ]

console.log( female.genderCode )
console.log( male.genderCode )
console.log( person.genderCode )
console.log( people.filter( p => p instanceof Male ).length )