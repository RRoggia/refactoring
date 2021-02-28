function potentialEnergy( mass, height ) {
  const gravity = 9.81
  return mass * gravity * height;
}

console.log( potentialEnergy( 10, 200 ) )