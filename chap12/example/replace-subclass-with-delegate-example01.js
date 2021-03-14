class Booking {
  constructor( show, date ) {
    this._show = show
    this._date = date
  }
  get hasTalkback() {
    return this._show.hasOwnProperty( 'talkback' ) && !this.isPeakDay
  }
  get basePrice() {
    let result = this._show.price
    if ( this.isPeakDay ) {
      result += Math.round(result * 0.15)
    }
    return result
  }
}

class PremiumBooking extends Booking {
  constructor( show, date, extras ) {
    super( show, date )
    this._extras = extras
  }
  get hasTalkback() {
    return this._show.hasOwnProperty( 'talkback' )
  }
  get basePrice() {
    return Math.round( super.basePrice + this._extras.premiumFee )
  }
  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay
  }
}

const aBooking = new Booking( { price: 30, hasTalkback: false }, new Date() )
const aPremiumBooking = new PremiumBooking( { price: 30, hasTalkback: true }, new Date(), { premiumFee: 30 } )

console.log( aBooking.basePrice )
console.log( aBooking.hasTalkback )
console.log( aPremiumBooking.basePrice )
console.log( aPremiumBooking.hasTalkback )