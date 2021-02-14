//The book moves to a specific file to restrict access to variables
function defaultOwner() {
  let defaultOwner = { firstName: 'Martin', lastName: 'Fowler' }

  function getDefaultOwner() {
    return defaultOwner
  }

  function setDefaultOwner( newDefaultOwner ) {
    defaultOwner = newDefaultOwner
  }
  return {
    getDefaultOwner, setDefaultOwner
  }
}

const { getDefaultOwner, setDefaultOwner } = defaultOwner()

const spaceship = {}
spaceship.owner = getDefaultOwner()

setDefaultOwner( { firstName: 'Rebecca', lastName: 'Parsons' } )

console.log( getDefaultOwner() )
console.log( spaceship )

