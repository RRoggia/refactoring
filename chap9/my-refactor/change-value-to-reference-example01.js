class Order {
  constructor( data ) {
    this._number = data.number
    this._customer = fetchCustomer( data.customer )
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

const customers = [ 
  new Customer( 1312 ),
  new Customer( 1313 ),
  new Customer( 1314 )
]

function fetchCustomer( id ) {
  return customers.find( c => c.id === id )
}

const order = new Order( { customer: 1312, number: 30 } )
console.log( order.customer.id  )