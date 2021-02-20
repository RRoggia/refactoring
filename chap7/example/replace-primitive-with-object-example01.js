class Order {
  constructor( data ) {
    this.priority = data.priority
  }  
}

function countHighAndRushPriorities( orders ) {
  const highPriorityCount = orders
    .filter( o => "high" === o.priority || "rush" === o.priority )
    .length
  return highPriorityCount
}

const orders = [
  new Order ( { priority: 'high' } ),
  new Order ( { priority: 'rush' } ),
  new Order ( { priority: 'rush' } ),
  new Order ( { priority: 'high' } ),
  new Order ( { priority: 'low' } ),
  new Order ( { priority: 'medium' } ),
  new Order ( { priority: 'low' } ),
  new Order ( { priority: 'low' } )
]

console.log( `High and Rush priorities are ${ countHighAndRushPriorities( orders ) }`)