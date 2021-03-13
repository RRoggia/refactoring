class Person {
  constructor( name, genderCode = 'X' ) {
    this._name = name
    this._genderCode = genderCode
  }
  get name() {
    return this._name
  }
  get genderCode() {
    return this._genderCode
  }
  isMale() {
    return this.genderCode === 'M'
  }
}

const female = new Person( '', 'F' )
const male = new Person( '', 'M' )
const person = new Person( 'Martin')
const people = [ female, male, person ]

console.log( female.genderCode )
console.log( male.genderCode )
console.log( person.genderCode )
console.log( people.filter( p => p.isMale() ).length )