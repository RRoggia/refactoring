function charge( customer, usage, provider ) {
  const baseCharge = customer.baseRate * usage
  return baseCharge + provider.connectionCharge
}

const customer = { baseRate: 0.32341 }
const usage = 100
const provider = { connectionCharge: 300 }
const monthCharge = charge( customer, usage, provider )
console.log( monthCharge )