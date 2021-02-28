import assert from 'assert'

class Customer {
  constructor() {
    this.discountRate = 0.1
  }
  applyDiscount(aNumber) {
    assert( this.discountRate > 0, 'Discount rate was not higher than zero' )
    return (this.discountRate)
      ? aNumber - (this.discountRate * aNumber)
      : aNumber;
  }
}

console.log( new Customer().applyDiscount( 100 ) )