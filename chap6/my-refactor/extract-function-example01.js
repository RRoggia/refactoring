function printOwing ( invoice ) {
  printOrderHeader()

  const outstanding = calculateOutstanding( invoice.orders )
  invoice.dueDate = recordDueDate()

  printOrderDetails( invoice.customer, outstanding, invoice.dueDate )
}

function printOrderHeader() {
  console.log( '***********************' )
  console.log( '**** Customer Owes ****' )
  console.log( '***********************' )
}

function calculateOutstanding ( orders ) {
  let outstanding = 0

  for( const o of orders ) {
    outstanding += o.amount
  }

  return outstanding
}

function recordDueDate() {
  const today = Clock.today
  return new Date( today.getFullYear(), today.getMonth(), today.getDate() + 30 )
}

function printOrderDetails( customer, outstanding, dueDate ) {
  console.log( `name: ${customer}` )
  console.log( `amount: ${outstanding}` )
  console.log( `due: ${dueDate.toLocaleDateString()}` )
}

class Clock {
  static today = new Date()
}

const invoice = {}
invoice.customer = 'Fowler'
invoice.orders = [ { amount: 10.00 }, { amount: 5.00 }, { amount: 40.00 }, { amount: 20.00 } ]
invoice.dueDate = null
printOwing( invoice )