function getCustomerName( site ) {
  return site.customer.name
}

function getBillingPlan( aCustomer, registry ) {
  return aCustomer.billingPlan
}

function getWeeksDelinquent( aCustomer ) {
  return aCustomer.paymentHistory.weeksDelinquentInLastYear
}

function acquireSiteData() {
  return {
    name: "Warehouse Unit 15",
    location: "Malden MA",
    customer: "unknown",
  }  
}

function enrichSiteDate( site ) {
  let { customer } = site
  if(customer !== 'unknown') {
    customer.isUnknown = false
    return
  }
  site.customer = {
    isUnknown : true,
    name : 'occupant',
    billingPlan : registry.billingPlans.basic,
    paymentHistory : { 
      weeksDelinquentInLastYear: 0
    }
  }
}

const registry = {
  billingPlans: {
    basic: 100
  }
}
const site = acquireSiteData()
enrichSiteDate( site )
console.log( getCustomerName( site ) )
console.log( getBillingPlan( site.customer, registry ) )
console.log( getWeeksDelinquent( site.customer ) )
