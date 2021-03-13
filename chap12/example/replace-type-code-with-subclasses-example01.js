class Employee {
  constructor( name, type ) {
    this.validateType( type )
    this._name = name
    this._type = type
  }
  validateType( arg ) {
    if ( ![ 'engineer', 'manager', 'salesman' ].includes( arg ) )
      throw new Error( `Employee cannot be of type ${ arg }` )
  }
  toString() {
    return `${ this._name } (${ this._type })`
  }
}

console.log( new Employee( 'Martin', 'engineer' ).toString() )
console.log( new Employee( 'Fowler', 'salesman' ).toString() )

