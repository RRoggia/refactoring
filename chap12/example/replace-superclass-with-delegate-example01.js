const LocalDate = {
  parse: a => a
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

class Scroll extends CatalogItem {
  constructor( id,  title, tags, dateLastCleaned ) {
    super( id, title, tags )
    this._lastCleaned = dateLastCleaned
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
      record.catalogData.title,
      record.catalogData.tags,
      LocalDate.parse( record.lastCleaned )
    ) )
  return scrolls
}

console.log( load( [ 
  { id: 1, catalogData: { title: 'Martin', tags: [ 'revered' ] }, lastCleaned: new Date() },
  { id: 2, catalogData: { title: 'Fowler', tags: [ 'nice' ] }, lastCleaned: new Date() },
  { id: 3, catalogData: { title: 'Refactoring', tags: [ 'books' ] }, lastCleaned: new Date() }
] ) )