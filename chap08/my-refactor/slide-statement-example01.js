const order = {
  units: 30,
  isRepeat: true
}

function charge() {
  const pricingPlan = retrievePricingPlan()
  const baseCharge = pricingPlan.base
  const chargePerUnit = pricingPlan.unit
  const discountThreshold = pricingPlan.discountThreshold
  const discountFactor = pricingPlan.discountFactor
  
  const order = retrieveOrder()
  const units = order.units
  const isRepeat = order.isRepeat

  let discount = calculateDiscount( units, discountThreshold, discountFactor, isRepeat ) 
  let charge = calculateCharge( baseCharge, units, chargePerUnit, discount )
  chargeOrder( charge )
}

function calculateCharge( baseCharge, units, chargePerUnit, discount ) {
  let charge = baseCharge + units * chargePerUnit
  charge = charge - discount
  return charge
}

function calculateDiscount( units, discountThreshold, discountFactor, isRepeat ) {
  const discountableUnits = Math.max(units - discountThreshold, 0)
  let discount = discountableUnits * discountFactor
  if (isRepeat) {
    discount += 20
  }
  return discount
}

function retrievePricingPlan() {
  return {
    base: 100,
    unit: 10,
    discountThreshold: 20,
    discountFactor: 0.25
  }
}

function retrieveOrder() {
  return order
}

function chargeOrder( charge ) {
  const order = retrieveOrder()
  order.charge = charge
}

charge()
console.log( retrieveOrder() )