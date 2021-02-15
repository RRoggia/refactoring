function priceOrder( product, quantity, shippingMethod ) {
  const productPriceData = calculateProductPriceData( quantity, product )
  return applyShipping( productPriceData, shippingMethod )
}

function calculateProductPriceData( quantity, product ) {
  const basePrice = product.basePrice * quantity
  const discount = Math.max( quantity - product.discountThreshold, 0 ) *
    product.basePrice * product.discountRate

  return {
    basePrice,
    discount,
    basePriceWithDiscount: basePrice - discount
  }
}

function applyShipping( productPriceData, shippingMethod ) {
  const shippingPerCase = ( productPriceData.basePrice > shippingMethod.discountThreshold ) ?
  shippingMethod.discountFee : shippingMethod.discountFeePerCase
  const shippingCost = quantity * shippingPerCase 
  return productPriceData.basePriceWithDiscount + shippingCost
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