class Employee {
  constructor( name, type ) {
    this.validateType( type )
    this._name = name
    this._type = Employee.createEmployeeType( type )
  }
  validateType( arg ) {
    if ( ![ 'engineer', 'manager', 'salesman' ].includes( arg ) )
      throw new Error( `Employee cannot be of type ${ arg }` )
  }
  get type() {
    return this._type
  }
  set type( arg ) {
    this._type = EmployeeType.createEmployeeType( arg )
  }
  static createEmployeeType( type ) {
    switch( type ){
      case 'engineer':
        return new Engineer()
      case 'manager':
        return new Employee()
      case 'salesman': 
        return new Salesman()
      default:
        throw new Error( `Employee cannot be of type ${ type }` )        
    }
  }

  toString() {
    return `${this._name} (${this.type.capitalizedName})`;
  }
}

class EmployeeType {
  get capitalizedName() {
    return this.toString().charAt(0).toUpperCase() + this.toString().substr(1).toLowerCase()
  }
}

class Engineer extends EmployeeType {
  toString() {
    return 'engineer'
  }
}

class Manager extends EmployeeType {
  toString() {
    return 'Manager'
  }
}

class Salesman extends EmployeeType {
  toString() {
    return 'salesman'
  }
}

console.log( new Employee( 'Martin', 'engineer' ).toString() )
console.log( new Employee( 'Fowler', 'salesman' ).toString() )

