class Person{
  constructor ( name ) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name
  }
  
  get courses() {
    return this._courses
  }

  set courses( aList ) {
    this._courses = aList
  }
}

class Course {
  constructor (name, isAdvanced ) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name() {
    return this._name
  }

  get isAdvanced() {
    return this._isAdvanced
  }
}

function getNumberOfAdvancedCourses( person ) {
  return person.courses
    .filter( course => course.isAdvanced )
    .length
}

function assignCoursesToPerson( aPerson, filename ) {
  const basicCourseNames = readBasicCourseName( filename )
  aPerson.courses = basicCourseNames.map( name => new Course( name , false ) )
}

function assignCoursesToPersonDirectly( aPerson, filename ) {
  for( const name of readBasicCourseName( filename ) ) {
    aPerson.courses.push( new Course( name, false ) )
  } 
}

function readBasicCourseName( filename ) {
  const courses = {
    'fileA' : [ 'Refactoring', 'Programming Language' ]
  }
  return courses[ filename ]
}

const person = new Person( 'Fowler' ) 
assignCoursesToPerson( person, 'fileA' )

const person2 = new Person( 'Fowler2' )
assignCoursesToPersonDirectly( person2, 'fileA' )

console.log( person )
console.log( person2 )
console.log( `Number of Advanced courses: ${ getNumberOfAdvancedCourses( person ) }`)

