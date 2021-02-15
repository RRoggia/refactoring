class Customer {
  constructor( name, discountRate ) {
    this._name = name
    this._discountRate = discountRate
    this._contract = new CustomerContract( dateToday() )
  }

  get discountRate() {
    return this._discountRate
  }

  becomePreferred() {
    this._discountRate += 0.03
    // other nice things
  }

  applyDiscount( amount ) {
    return amount.subtract( amount.multiply( this._discountRate ) )
  }
}

class CustomerContract {
  constructor( startDate ){ 
    this._startDate = startDate
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