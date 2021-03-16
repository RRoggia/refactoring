class Account {

  constructor( accountType ) {
    this._daysOverdrawn = 5
    this.type = accountType
  }

  get daysOverdrawn() {
    return this._daysOverdrawn
  }

  get bankCharge() {
    let result = 4.5
    if( this._daysOverdrawn > 0 ) {
      result += this.overdraftCharge
    }
    return result
  }

  get overdraftCharge() {
    if( this.type.isPremium ) {
      const baseCharge = 10
      if( this.daysOverdrawn <= 7 ) {
        return baseCharge
      } else {
        return baseCharge + ( this.daysOverdrawn - 7 ) * 0.85
      }
    } else {
      return this.daysOverdrawn * 1.75
    }
  }
}

class AccountType {
  constructor( isPremium ) {
    this.isPremium = isPremium
  }
}

console.log( new Account( new AccountType( false ) ).overdraftCharge )
console.log( new Account( new AccountType( true ) ).overdraftCharge )