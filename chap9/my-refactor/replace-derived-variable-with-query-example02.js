class ProductionPlan {
  constructor( production ) {
    this._production = production
    this._adjustments = []
  }

  get production() {
    return this._production + this._adjustments
      .reduce( ( sum, a ) => sum += a.amount, 0 )
  }

  applyAdjustment( anAdjustment ) {
    this._adjustments.push( anAdjustment )
  }
}

const productionPlan = new ProductionPlan( 10 )
console.log( `production value: ${ productionPlan.production }` )
productionPlan.applyAdjustment( { amount: 20 } )
console.log( `production value: ${ productionPlan.production }` )