function priceOrder( product, quantity, shippingMethod ) {
  const basePrice = product.basePrice * quantity
  const discount = Math.max( quantity - product.discountThreshold, 0 ) *
    product.basePrice * product.discountRate
  const shippingPerCase = ( basePrice > shippingMethod.discountThreshold ) ?
    shippingMethod.discountFee : shippingMethod.discountFeePerCase
  const shippingCost = quantity * shippingPerCase
  const price = basePrice - discount + shippingCost
  return price
}

const productA = {
  basePrice: 10,
  discountThreshold: 5,
  discountRate: 0.05
}

const quantity = 10

const shippingMethod = {
  discountThreshold: 3,
  discountFee: 10,
  discountFeePerCase: 15
}

console.log( priceOrder( productA, quantity, shippingMethod ) )