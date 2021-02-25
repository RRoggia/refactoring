function payAmount( employee ) {
  if( employee.isSeparated ) {
    return { amount: 0, reasonCode: "SEP" }
  }
  if ( employee.isRetired ) {
    return { amount: 0, reasonCode: "RET" }
  }

  return 301
}

console.log( payAmount( {
  isSeparated: false,
  isRetired: false
} ) )