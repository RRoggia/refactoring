class TrackingInformation {
  constructor( shippingCompany, trackingNumber ) {
    this._shippingCompany = shippingCompany
    this._trackingNumber = trackingNumber
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

  get display() {
    return `${ this.shippingCompany } : ${ this.trackingNumber }`
  }
}

class Shipment {
  constructor( trackingInformation ){
    this._trackingInformation = trackingInformation
  }
  get trackingInfo() {
    return this._trackingInformation.display
  }

  get trackingInformation() {
    return this._trackingInformation
  }

  set trackingInformation( newTrackingInformation ) {
    this._trackingInformation = newTrackingInformation
  }
}

const trackingInformation = new TrackingInformation( 'SEDEX', '1234' )
const shipment = new Shipment( trackingInformation )
console.log( trackingInformation.display )
console.log( shipment.trackingInfo)

shipment.trackingInformation.shippingCompany = 'ROYAL'
console.log( shipment.trackingInfo)
