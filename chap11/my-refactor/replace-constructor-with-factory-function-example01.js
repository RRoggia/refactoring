class Employee {
  constructor ( name, typeCode ) {
    this._name = name
    this._typeCode = typeCode
  }
  get name() {
    return this._name
  }
  get type() {
    return Employee.legalTypeCodes[ this._typeCode ]
  }
  static get legalTypeCodes() {
    return {
      'E': 'Engineer',
      'M': 'Manager',
      'S': 'Salesman'
    }
  }
}

function createEmployee( name, type ) {
  return new Employee( name, type )
}
function createEngineer( name ) {
  return createEmployee( name, 'E' )
}

function printCandidate( document ) {
  const candidate = createEmployee( document.name, document.empType )
  console.log( `${ candidate.name } applied for the ${ candidate.type } role` )
}  

function printLeadEngineer( document ) {
  const leadEngineer = createEngineer( document.leadEngineer )
  console.log( `${ leadEngineer.name } is the leader of the ${ leadEngineer.type }` )  
}

printCandidate( { name: 'Martin', empType: 'M' } )
printLeadEngineer( { leadEngineer: 'Fowler' } )