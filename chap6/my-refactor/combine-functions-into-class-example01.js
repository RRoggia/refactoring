class Reading {
  constructor( { customer, quantity, month, year } ) {
    this._customer = customer
    this._quantity = quantity
    this._month = month
    this._year = year
  }

  get customer() {
    return this._customer
  }
  
  get quantity() {
    return this._quantity
  }

  get month() {
    return this._month
  }

  get year() {
    return this._year
  }

  get baseRate() {
    return ( this.year + this.month ) * 0.1
  }

  get baseCharge() {
    return this.baseRate * this.quantity
  }

  get taxableCharge() { 
    return Math.max( 0, this.baseCharge - this.taxTreshold )
  }

  get taxTreshold() {
    return this.year - 100
  }
}

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }

console.log( `Client 1: ${ new Reading( reading ).baseCharge }` )
console.log( `Client 2: ${ new Reading( reading ).taxableCharge }` )
console.log( `Client 3: ${ new Reading( reading ).baseCharge }` )
