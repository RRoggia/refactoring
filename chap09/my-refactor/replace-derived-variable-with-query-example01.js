class ProductionPlan {
  constructor( production ) {
    this._adjustments = [ { amount: production } ]
  }

  get production() {
    return this._adjustments.reduce( ( total, p ) => total += p.amount, 0 )
  }

  applyAdjustment( anAdjustment ) {
    this._adjustments.push( anAdjustment )
  }
}

const productionPlan = new ProductionPlan( 10 )
console.log( `production value: ${ productionPlan.production }` )
productionPlan.applyAdjustment( { amount: 20 } )
console.log( `production value: ${ productionPlan.production }` )
