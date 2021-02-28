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

function acquireSiteData() {
  return {
    name: "Warehouse Unit 15",
    location: "Malden MA",
    customer: "unknown",
  }  
}
  
const site = acquireSiteData()

console.log( getCustomerName( site ) )
console.log( getBillingPlan( site.customer, {
  billingPlans: {
    basic: 100
  }
} ) )
console.log( getWeeksDelinquent( site.customer ) )
