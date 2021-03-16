function isBasePriceHigherThan1000 ( anOrder ) {
  return anOrder.basePrice > 1000
}

console.log( `Is base price higher than 1000? ${ isBasePriceHigherThan1000( { basePrice: 10000 } ) } ` )