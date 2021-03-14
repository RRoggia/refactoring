class Party {
  constructor( monthlyCost ) {
    this._monthlyCost = monthlyCost
  }
  get monthlyCost() {
    return this._monthlyCost
  }
}

class Employee extends Party {
  get annualCost() {
    return this.monthlyCost * 12
  }
}

const employee = new Employee( 302.1 )
console.log( employee.annualCost )