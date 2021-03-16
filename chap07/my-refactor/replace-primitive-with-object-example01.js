class Order {
  constructor( data ) {
    this._priority = new Priority( data.priority )
  }
  
  get priority() {
    return this._priority
  }

  get priorityString() {
    return this._priority.toString()
  }

  set priority( priority ) {
    this._priority = new Priority( priority )
  }
}

class Priority {
  constructor( value ) {
    if ( value instanceof Priority ) {
      return value
    }

    if ( Priority.legalValues().includes( value ) ) {
      this._value = value
    } else {
      throw new Error( `<${value}> is invalid for Property` )
    }
  }

  toString() {
    return this._value
  }

  get _index() {
    return Priority.legalValues().findIndex( s => s === this._value )
  }

  static legalValues() {
    return [
      'low', 'normal', 'high', 'rush'
    ]
  }

  equals( other ) {
    return this._index === other._index
  }
  
  higherThan( other ) {
    return this._index > other._index
  }

  lowerThan( other ) {
    return this._index < other._index
  }

  isValue( value ) {
    return this._value === value
  }

  isHigh() {
    return this.isValue( "high" )
  }

  isRush() {
    return this.isValue( "rush" )
  }
}

function countHighAndRushPriorities( orders ) {
  return orders
    .filter( o => o.priority.isHigh() || o.priority.isRush() )
    .length
}

const orders = [
  new Order ( { priority: 'high' } ),
  new Order ( { priority: 'rush' } ),
  new Order ( { priority: 'rush' } ),
  new Order ( { priority: 'high' } ),
  new Order ( { priority: 'low' } ),
  new Order ( { priority: 'normal' } ),
  new Order ( { priority: 'low' } ),
  new Order ( { priority: 'low' } )
]

console.log( `High and Rush priorities are ${ countHighAndRushPriorities( orders ) }`)