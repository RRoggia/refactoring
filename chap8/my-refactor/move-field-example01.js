class Customer {
  constructor( name, discountRate ) {
    this._name = name
    this._contract = new CustomerContract( dateToday(), discountRate )
  }

  get discountRate() {
    return this._contract._discountRate
  }

  becomePreferred() {
    this._contract.discountRate = this.discountRate + 0.03
    // other nice things
  }

  applyDiscount( amount ) {
    return amount.subtract( amount.multiply( this.discountRate ) )
  }
}

class CustomerContract {
  constructor( startDate, discountRate ){ 
    this._startDate = startDate
    this._discountRate = discountRate
  }

  get discountRate() {
    this._discountRate
  }

  set discountRate( newDiscountRate ) {
    this._discountRate = newDiscountRate
  }
}

function dateToday() {
  return new Date()
}

const amount = ( initialValue ) => {
  const subtract = ( value ) => {
    return initialValue - value
  }
  const multiply = ( value ) => {
    return initialValue * value
  }
  return {
    subtract, multiply
  }
}

const customer = new Customer( 'Martin Fowler', 0.01 )

console.log( `Discount Rate: ${ customer.discountRate }` )
customer.becomePreferred()
console.log( `Discount Rate Preferred: ${ customer.discountRate }` )
console.log( `Customer Discount ${ customer.applyDiscount( amount( 10 ) ) }`)