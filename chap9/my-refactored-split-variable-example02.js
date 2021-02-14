function discount( inputValue, quantity ) {
  let result = inputValue
  if( result > 50 ) {
    result = result - 2
  }
  if( quantity > 100 ) {
    result = result - 1
  }
  return result
}

console.log( `discount is ${ discount( 75, 10 ) }` )