const order = {
  units: 30,
  isRepeat: true
}

function charge() {
  const pricingPlan = retrievePricingPlan()
  const order = retrieveOrder()
  const baseCharge = pricingPlan.base
  let charge
  const chargePerUnit = pricingPlan.unit
  const units = order.units
  let discount
  charge = baseCharge + units * chargePerUnit
  let discountableUnits = Math.max( units - pricingPlan.discountThreshold, 0 )
  discount = discountableUnits * pricingPlan.discountFactor
  if ( order.isRepeat ) discount += 20
  charge = charge - discount
  chargeOrder( charge )
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