class Employee {
}

class Engineer extends Employee {
}

class Salesman extends Employee {
  constructor( quota ) {
    super()
    this._quota = quota
  }
}

console.log( new Engineer() )
console.log( new Salesman( 10.0 ) )