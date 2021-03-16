class Shipment {
  constructor( shippingCompany, trackingNumber ) {
    this._shippingCompany = shippingCompany
    this._trackingNumber = trackingNumber
  }
  get trackingInfo() {
    return `${ this.shippingCompany } : ${ this.trackingNumber }`
  }

  get shippingCompany() {
    return this._shippingCompany
  }

  set shippingCompany( newShippingCompany) {
    this._shippingCompany = newShippingCompany
  }

  get trackingNumber() {
    return this._trackingNumber
  }

  set trackingNumber( newTrackingNumber) {
    this._trackingNumber = newTrackingNumber
  }

}

const shipment = new Shipment( 'SEDEX', '1234' )
console.log( shipment.trackingInfo)

shipment.shippingCompany = 'ROYAL'
console.log( shipment.trackingInfo)
