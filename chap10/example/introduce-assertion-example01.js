class Customer {
  constructor() {
    this.discountRate = 0.1
  }
  applyDiscount(aNumber) {
    return (this.discountRate)
      ? aNumber - (this.discountRate * aNumber)
      : aNumber;
  }
}

console.log( new Customer().applyDiscount( 100 ) )