class Party {
}

class Employee extends Party {
  constructor( name, id, monthlyCost ) {
    super()
    this._id = id
    this._name = name
    this._monthlyCost = monthlyCost
  }
}

class Department extends Party {
  constructor( name, staff ){
    super()
    this._name = name
    this.staff = staff
  }
}

console.log( new Employee( 'Martin', '130', 100000.00 ) )
console.log( new Department( 'Fowler', { cost: 30.0 } ) )