function placeShipmentDateOnRush( anOrder, aShipment ) {
  aShipment.deliveryDate = deliveryDateOnRush( anOrder )
  return aShipment.deliveryDate
}

function placeShipmentDate( anOrder, aShipment ) {
  aShipment.deliveryDate = deliveryDate( anOrder, false )
  return aShipment.deliveryDate
}

function deliveryDateOnRush( anOrder ) {
  let deliveryTime
  if ( [ 'MA', 'CT' ].includes( anOrder.deliveryState ) ) {
    deliveryTime = 1
  } else if ( [ 'NY', 'NH' ].includes( anOrder.deliveryState ) ) {
    deliveryTime = 2
  } else {
    deliveryTime = 3
  }
  return anOrder.placedOn.plusDays( 1 + deliveryTime )
}

function deliveryDate( anOrder ) {
  let deliveryTime
  if ( [ 'MA', 'CT', 'NY' ].includes( anOrder.deliveryState ) ) {
    deliveryTime = 2
  } else if ( [ 'ME', 'NH' ].includes( anOrder.deliveryState ) ) {
    deliveryTime = 3
  } else {
    deliveryTime = 4
  }
  return anOrder.placedOn.plusDays( 2 + deliveryTime )
}

function enrichDate( date ) {
  date.plusDays = ( days ) => {
    const plusDaysDate = new Date( date )
    plusDaysDate.setDate( date.getDate() + days )
    return plusDaysDate
  }
  return date
}
const order = {
  deliveryState: 'MA',
  placedOn: enrichDate( new Date() )
}
console.log( placeShipmentDate( order, {} ) )
console.log( placeShipmentDateOnRush( order, {} ) )