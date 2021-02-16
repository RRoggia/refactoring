class Person {
  constructor( name ) {
    this._name = name
  }

  get name() {
    return this._name
  }

  get department() {
    return this._department
  }

  set department( department ) {
    this._department = department
  }
}

class Department {
  constructor( chargeCode, manager ) {
    this._chargeCode = chargeCode
    this._manager = manager
  }

  get chargeCode() {
    return this._chargeCode
  }

  set chargeCode( chargeCode ) {
    this._chargeCode = chargeCode
  }

  get manager() {
    return this._manager
  }

  set manager( manager ) {
    this._manager = manager
  }
}

const manager = new Person( 'Martin' )
const employee = new Person( 'Fowler' )

const department = new Department( '1112', manager )
employee.department = department

console.log( employee.department.manager )

