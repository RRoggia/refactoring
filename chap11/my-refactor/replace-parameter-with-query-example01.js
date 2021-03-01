class Order {
  constructor( quantity, itemPrice ) {
    this.quantity = quantity
    this.itemPrice = itemPrice
  }
  get finalPrice() {
    switch ( this.discountLevel ) {
      case 1:
        return this.basePrice * 0.95
      case 2:
        return this.basePrice * 0.9
    }
  }
  get discountLevel() {
    if (this.quantity > 100) {
      return 2
    } else { 
      return 1
    }
  }
  get basePrice() {
    return this.quantity * this.itemPrice
  }
}

const order = new Order( 1000, 23.23)
console.log( order.finalPrice )
