class Site {
  constructor( customer ) {
    this._customer = customer 
  }
  get customer() {
    return this._customer ? this._customer : new UnknownCustomer()
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
  get isUnknown() {
    return false
  }
  get paymentHistory() {
    return aCustomer.paymentHistory.weeksDelinquentInLastYear
  }
}

class UnknownCustomer {
  get name() {
    return 'occupant'
  }
  isUnknown() {
    return true
  }
  get paymentHistory() {
    return new NullPaymentHistory()
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0
  }
}

function getCustomerName( site ) {
  const aCustomer = site.customer
  return aCustomer.name
}

function getBillingPlan( aCustomer, registry ) {
  const plan = (aCustomer.isUnknown() ) ?
    registry.billingPlans.basic
    : aCustomer.billingPlan
  return plan
}

function assignNewPlan( aCustomer, newPlan ) {
  if ( !aCustomer.isUnknown() ) {
    aCustomer.billingPlan = newPlan
  }
  return aCustomer
}

function getWeeksDelinquent( aCustomer ) {
  return aCustomer.paymentHistory.weeksDelinquentInLastYear
}
  
const site = new Site()

console.log( getCustomerName( site ) )
console.log( getBillingPlan( site.customer, {
  billingPlans: {
    basic: 100
  }
} ) )
console.log( assignNewPlan( site.customer, 100 ) )
console.log( getWeeksDelinquent( site.customer ) )