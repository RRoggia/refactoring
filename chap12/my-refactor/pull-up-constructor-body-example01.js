class Party {
  constructor( name ) {
    this._name = name
  }
}

class Employee extends Party {
  constructor( name, id, monthlyCost ) {
    super( name )
    this._id = id
    this._monthlyCost = monthlyCost
  }
}

class Department extends Party {
  constructor( name, staff ){
    super( name )
    this.staff = staff
  }
}

console.log( new Employee( 'Martin', '130', 100000.00 ) )
console.log( new Department( 'Fowler', { cost: 30.0 } ) )