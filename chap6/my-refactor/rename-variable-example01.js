function Title() {
  let tpHD = 'untitled'

  function title() {
    return tpHD
  }

  function setTitle( title ) {
    tpHD = title
  }
  return {
    title, setTitle
  }
}
const { title, setTitle } = Title()

function createHTML(){
  let result = '<body>'
  result += `<h1>${ title() }</h1>`
  result += '</body>'
  return result
}

// Could be the case to apply the Inline Function 
function changeTitle( obj ) {
  setTitle( obj[ 'articleTitle' ] )
}

console.log(createHTML())
changeTitle( { articleTitle: 'The Theory of relativity' } )
console.log(createHTML())