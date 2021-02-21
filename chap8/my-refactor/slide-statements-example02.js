function allocateAndReturnResource( availableResources, allocatedResources ) {
  let result
  if ( availableResources.length === 0 ) {
    result = createResource()
  } else {
    result = availableResources.pop()
  }
  allocatedResources.push( result )
  return result
}

function createResource() {
  return 'Martin'
}

const available = []
const allocated = []
console.log( allocateAndReturnResource( available, allocated ) )
available.push( 'Fowler' )
console.log( allocateAndReturnResource( available, allocated ) )