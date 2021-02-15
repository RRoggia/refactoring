class Account {
  constructor( number, type ) {
    this._number = number
    this._type = type
  }
}

class AccountType {
  constructor( nameString, interestRate ) {
    this._name = nameString
    this._interestRate = interestRate
  }
}

console.log( new Account( 10, new AccountType( 'Savings', 0.3 ) ) )