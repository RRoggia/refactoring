let tpHD = 'untitled'

function createHTML(){
  let result = '<body>'
  result += `<h1>${ tpHD }</h1>`
  result += '</body>'
  return result
}

function changeTitle( obj ){ 
  tpHD = obj['articleTitle']
}

console.log(createHTML())
changeTitle( { articleTitle: 'The Theory of relativity' } )
console.log(createHTML())