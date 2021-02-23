class ProductionPlan {
  constructor( production ) {
    this._production = production
    this._adjustments = []
  }

  get production() {
    return this._production
  }

  applyAdjustment( anAdjustment ) {
    this._adjustments.push( anAdjustment )
    this._production += anAdjustment.amount
  }
}

const productionPlan = new ProductionPlan( 10 )
console.log( `production value: ${ productionPlan.production }` )
productionPlan.applyAdjustment( { amount: 20 } )
console.log( `production value: ${ productionPlan.production }` )