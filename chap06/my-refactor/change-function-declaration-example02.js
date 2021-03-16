class Book {
  constructor() {
    this._reservations = []
    this._priority_reservations = []
  }

  addReservation( customer, isPriority ) {
    if( isPriority ) {
      this._priority_reservations.push( customer )
    } else {
      this._reservations.push( customer )
    }
  }
}

const book = new Book()
book.addReservation( 'Renan', false )
book.addReservation( 'Paulo', false )
book.addReservation( 'Henrique', false )

console.log( book )