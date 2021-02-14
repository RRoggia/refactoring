function printOwing ( invoice ) {
  let outstanding = 0

  console.log( '***********************' )
  console.log( '**** Customer Owes ****' )
  console.log( '***********************' )

  //calculate outstanding
  for( const o of invoice.orders ) {
      outstanding += o.amount
  }

  //record due date
  const today = Clock.today
  console.log(today)

  invoice.dueDate = new Date( today.getFullYear(), today.getMonth(), today.getDate() + 30 )

  //print details
  console.log( `name: ${invoice.customer}` )
  console.log( `amount: ${outstanding}` )
  console.log( `due: ${invoice.dueDate.toLocaleDateString()}` )
}

class Clock {
  static today = new Date()
}

const invoice = {}
invoice.customer = 'Fowler'
invoice.orders = [ { amount: 10.00 }, { amount: 5.00 }, { amount: 40.00 }, { amount: 20.00 } ]
invoice.dueDate = null
printOwing( invoice )

