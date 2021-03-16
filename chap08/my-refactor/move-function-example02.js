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
    return this.type.overdraftCharge( this.daysOverdrawn )
  }
}

class AccountType {

  constructor( isPremium ) {
    this.isPremium = isPremium
  }

  overdraftCharge( daysOverdrawn ) {
    if( this.isPremium ) {
      const baseCharge = 10
      if( daysOverdrawn <= 7 ) {
        return baseCharge
      } else {
        return baseCharge + ( daysOverdrawn - 7 ) * 0.85
      }
    } else {
      return daysOverdrawn * 1.75
    }
  }
}

console.log( new Account( new AccountType( false ) ).overdraftCharge )
console.log( new Account( new AccountType( true ) ).overdraftCharge )