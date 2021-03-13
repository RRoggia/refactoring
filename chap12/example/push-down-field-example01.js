class Employee {
  constructor( quota ) {
    this._quota = quota
  }
}

class Engineer extends Employee {
  constructor() {
    super( null )
  }
}

class Salesman extends Employee {
}

console.log( new Engineer() )
console.log( new Salesman( 10.0 ) )