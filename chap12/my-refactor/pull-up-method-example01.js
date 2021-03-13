class Party {
  constructor( monthlyCost ) {
    this.monthlyCost = monthlyCost
  }
  get annualCost() {
    return this.monthlyCost * 12
  }
}

class Employee extends Party{
  constructor( monthlyCost ) {
    super( monthlyCost )
  }
}

  
class Department extends Party {
  constructor( monthlyCost ) {
    super( monthlyCost )
  }
}

const employeeParty = new Employee( 11.3 )
const departmentParty = new Department( 30.2 )

console.log( employeeParty.annualCost )
console.log( departmentParty.annualCost )