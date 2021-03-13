class Party {
  constructor( monthlyCost ) {
    this._monthlyCost = monthlyCost
  }
  get monthlyCost() {
    return this._monthlyCost
  }
}

class Employee extends Party{
  get annualCost() {
    return this.monthlyCost * 12
  }
}

class Department extends Party {
  get totalAnnualCost() {
    return this.monthlyCost * 12
  }
}

const employeeParty = new Employee( 11.3 )
const departmentParty = new Department( 30.2 )

console.log( employeeParty.annualCost )
console.log( departmentParty.totalAnnualCost )