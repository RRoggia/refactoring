class Order {
  constructor( data ) {
    this._number = data.number
    this._customer = new Customer( data.customer )
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

const order = new Order( { customer: 1312, number: 30 } )
console.log( order.customer.id  )