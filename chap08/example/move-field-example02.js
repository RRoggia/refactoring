class Account {
  constructor( number, type, interestRate ) {
    this._number = number
    this._type = type
    this._interestRate = interestRate
  }
}

class AccountType {
  constructor( nameString ) {
    this._name = nameString
  }
}

console.log( new Account( 10, new AccountType( 'Savings ' ), 0.3 ) )