class Site {
  constructor( customer ) {
    this._customer = customer
  }

  get customer() {
    return this._customer ? this._customer : createUnknownCustomer()
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
    return false;
  }
}

function createUnknownCustomer() {
  return {
    paymentHistory: {
      weeksDelinquentInLastYear: 0
    },
    billingPlan: registry.billingPlans.basic,
    name: 'occupant',
    isUnknown: true,
  }
}

function getCustomerName( site ) {
  return site.customer.name
}

function getBillingPlan( aCustomer ) {
  return aCustomer.billingPlan
}

function getWeeksDelinquent( aCustomer ) {
  return aCustomer.paymentHistory.weeksDelinquentInLastYear
}
  
const site = new Site()
const registry = {
  billingPlans: {
    basic: 100
  }
}
console.log( getCustomerName( site ) )
console.log( getBillingPlan( site.customer ) )
console.log( getWeeksDelinquent( site.customer ) )