const { registerCustomer, findCustomer } = customerRepository()

class Order {
  constructor( data ) {
    this._number = data.number
    this._customer = registerCustomer( data.customer )
    // load other data
  }

  get customer() {
    return this._customer
  }
}

class Customer {
  constructor( id ) {
    this._id = id
  }

  get id() {
    return this._id
  }
}

function customerRepository() {
  let customers = new Map()

  function registerCustomer( id ) {
    if( !customers.has( id ) ) {
      customers.set( id, new Customer( id ) )
    }
    return findCustomer( id )
  }

  function findCustomer( id ) {
    return customers.get( id )
  }

  return {
    registerCustomer,
    findCustomer
  }
}

const order = new Order( { customer: 1312, number: 30 } )
console.log( order.customer.id  )