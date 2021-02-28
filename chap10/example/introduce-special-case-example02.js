class Site {
  constructor( customer ) {
    this._customer = customer
  }

  get customer() {
    return this._customer
  }
}

class Customer {
  get name() {
    return this._name
  }
  get billingPlan() {
    return this._billingPlan
  }
  set billingPlan( billingPlan ) {
    this._billingPlan = billingPlan
  }
  get paymentHistory() {
    return this._paymentHistory
  }
}

function getCustomerName( site ) {
  const aCustomer = site.customer
  let customerName
  if  ( aCustomer === 'unknown' ) {
    customerName = 'occupant'
  } else {
    customerName = aCustomer.name
  }
  return customerName
}

  
function getBillingPlan( aCustomer, registry ) {
  const plan = (aCustomer === 'unknown') ?
    registry.billingPlans.basic
    : aCustomer.billingPlan
  return plan
}

function getWeeksDelinquent( aCustomer ) {
  const weeksDelinquent = (aCustomer === 'unknown') ?
    0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear
  return weeksDelinquent
}
  
const site = new Site()

console.log( getCustomerName( site ) )
console.log( getBillingPlan( site.customer, {
  billingPlans: {
    basic: 100
  }
} ) )
console.log( getWeeksDelinquent( site.customer ) )