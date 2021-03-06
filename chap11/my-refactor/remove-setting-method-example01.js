class Person {
  constructor( name, id ) {
    this._name = name
    this._id = id
  }
  get name() {
    return this._name
  }
  get id() {
    return this._id
  }
}

const martin = new Person( "martin", "1234" )

console.log( martin )