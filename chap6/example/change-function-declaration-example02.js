class Book {
  constructor() {
    this._reservations = []
  }

  addReservation( customer ) {
    this._reservations.push( customer )
  }
}

const book = new Book()
book.addReservation( 'Renan', false )
book.addReservation( 'Paulo', false )
book.addReservation( 'Henrique', false )

console.log( book )