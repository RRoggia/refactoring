function price( order ) {
  // price is base price - quantity discount + shipping
  const basePrice = order.quantity * order.itemPrice
  const quantityDiscount = Math.max(0, order.quantity - 500 ) * order.itemPrice * 0.05
  const shipping = Math.min( basePrice * 0.1, 100 )
  
  return basePrice - quantityDiscount + shipping  
}

console.log( `The price is ${ price( { quantity: 10, itemPrice: 1.20 } ) }` )