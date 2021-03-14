const LocalDate = {
  parse: a => a
}

const data = [ 
  { id: 1, catalogData: { id: 1, title: 'Martin', tags: [ 'revered' ] }, lastCleaned: new Date() },
  { id: 2, catalogData: { id: 2, title: 'Fowler', tags: [ 'nice' ] }, lastCleaned: new Date() },
  { id: 3, catalogData: { id: 3, title: 'Refactoring', tags: [ 'books' ] }, lastCleaned: new Date() }
]


const catalog = {
  get: ( id ) => {
    return data.find( item => item.id === id )
  }
}

class CatalogItem {
  constructor( id, title, tags ) {
    this._id = id
    this._title = title
    this._tags = tags
  }

  get id() {
    return this._id
  }
  get title() {
    return this._title
  }
  hasTag( arg ) {
    return this._tags.includes( arg )
  }
}

class Scroll {
  constructor( id, dateLastCleaned, catalogID, catalog ) {
    this._id = id
    this._catalogItem = catalog.get( catalogID )
    this._lastCleaned = dateLastCleaned
  }
  get id() {
    return this._id
  }
  get title() {
    return this._catalogItem.title
  }
  hasTag( arg ) {
    return this._catalogItem.hasTag( arg )
  }
  needsCleaning( targetDate ) {
    const threshold =  this.hasTag( 'revered' ) ? 700 : 1500
    return this.daysSinceLastCleaning( targetDate ) > threshold 
  }
  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until( targetDate, ChronoUnit.DAYS )
  }
}

function load( aDocument, catalog ) {
  const scrolls = aDocument
    .map(record => new Scroll( 
      record.id,
      LocalDate.parse( record.lastCleaned ),
      record.catalogData.id,
      catalog
    ) )
  return scrolls
}

console.log( load( data, catalog ) )