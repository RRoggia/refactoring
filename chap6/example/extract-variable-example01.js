function price( order ) {
  // price is base price - quantity discount + shipping
  return order.quantity * order.itemPrice - 
    Math.max( 0, order.quantity - 500 ) * order.itemPrice * 0.05 + 
    Math.min( order.quantity * order.itemPrice * 0.1, 100 )
}

console.log( `The price is ${ price( { quantity: 10, itemPrice: 1.20 } ) }` )

