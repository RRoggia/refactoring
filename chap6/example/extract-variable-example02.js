class Order {
  constructor( aRecord ) {
    this._data = aRecord
  }

  get quantity() { 
    return this._data.quantity
  }

  get itemPrice() {
    return this._data.itemPrice
  }

  get price() {
    return this.quantity * this.itemPrice - 
    Math.max( 0, this.quantity - 500 ) * this.itemPrice * 0.05 + 
    Math.min( this.quantity * this.itemPrice * 0.1, 100 )
  }
}

const orderA = new Order( { quantity: 10, itemPrice: 1.20 } )
console.log( `Order's price is: ${ orderA.price } ` )

