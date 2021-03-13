class Employee {
  constructor( salary ) {
    this._salary = salary
  }

  get quota() {
    return 0.1
  }

  get salary() {
    return this._salary
  }
}

class Engineer extends Employee {
}

class Salesman extends Employee {
  get salary() {
    return super.salary + ( super.salary * this.quota )
  }
}

console.log( new Engineer( 10.00 ).salary )
console.log( new Salesman( 13.00 ).salary )