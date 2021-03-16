function renderPerson( outStream, person ) {
  outStream.write( `<p>${person.name}</p>\n` )
  renderPhoto( outStream, person.photo )
  emitPhotoData( outStream, person.photo )
  outStream.write( `<p>location: ${person.photo.location}</p>\n` )
}

function listRecentPhotos( outStream, photos ) {
  photos
    .filter( p => p.date > recentDateCutoff() )
    .forEach( p => {
      outStream.write( '<div>\n' )
      emitPhotoData( outStream, p )
      outStream.write( `<p>location: ${p.location}</p>\n` )
      outStream.write( '</div>\n' )
    } )
}

function emitPhotoData( outStream, photo ) {
  outStream.write( `<p>title: ${photo.title}</p>\n` )
  outStream.write( `<p>date: ${photo.date.toDateString( )}</p>\n` )
}

function renderPhoto( outStream, photo ) {
  outStream.write( `<img> ${ photo.toString( ) } </img>\n` )
}

function recentDateCutoff() {
  return new Date('2020-12-01')
}

const outStream = { 
  write: e => console.log( e )
}
renderPerson( outStream, {
  name: 'Martin',
  photo: {
    title: 'Martin\'s photo',
    location: 'UK',
    date: new Date()
  }
} )

listRecentPhotos( outStream, [
  {
    title: 'Martin\'s photo',
    location: 'UK',
    date: new Date()
  },
  {
    title: 'Fowlers\'s photo',
    location: 'UK',
    date: new Date()
  }
] )