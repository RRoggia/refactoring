class Party {
}

class Employee extends Party{
  constructor( monthlyCost ) {
    super()
    this.monthlyCost = monthlyCost
  }
  get annualCost() {
    return this.monthlyCost * 12
  }
}

  
class Department extends Party {
  constructor( monthlyCost ) {
    super()
    this.monthlyCost = monthlyCost
  }
  get totalAnnualCost() {
    return this.monthlyCost * 12
  }
}

const employeeParty = new Employee( 11.3 )
const departmentParty = new Department( 30.2 )

console.log( employeeParty.annualCost )
console.log( departmentParty.totalAnnualCost )