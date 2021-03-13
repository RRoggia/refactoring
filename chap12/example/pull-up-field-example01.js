class Party {
}

class Employee extends Party{
  constructor( monthlyCost ) {
    super()
    this._aMonthlyCost = monthlyCost
  }
  get annualCost() {
    return this.monthlyCost * 12
  }
  get monthlyCost() {
    return this._aMonthlyCost
  }
}

class Department extends Party {
  constructor( monthlyCost ) {
    super()
    this._monthlyCost = monthlyCost
  }
  get totalAnnualCost() {
    return this.monthlyCost * 12
  }
  get monthlyCost() {
    return this._monthlyCost
  }
}

const employeeParty = new Employee( 11.3 )
const departmentParty = new Department( 30.2 )

console.log( employeeParty.annualCost )
console.log( departmentParty.totalAnnualCost )