function rating( voyage, history ) {
  return createRating( voyage, history ).value
}



class Rating {
  constructor( voyage, history ) {
    this._voyage = voyage
    this._history = history
  }

  get voyage() {
    return this._voyage
  }

  get history() {
    return this._history
  }

  get value() {
    const vpf = voyageProfitFactor( this.voyage, this.history )
    const vr = voyageRisk
    const chr = captainHistoryRisk( this.voyage, this.history )
    if ( vpf * 3 > ( vr + chr * 2 ) ) {
      return "A"
    } else {
      return "B"
    }
  }

  get voyageRisk() {
    let result = 1
    if ( this.voyage.length > 4 ) {
      result += 2
    }
    if ( this.voyage.length > 8 ) {
      result += this.voyage.length - 8
    }
    if ( [ 'china', 'east-indies' ].includes( this.voyage.zone ) ) {
      result += 4
    }
    return Math.max(result, 0)
  }
  
  get captainHistoryRisk() {
    let result = 1
    if ( this.history.length < 5 ) {
      result += 4
    }
    result += this.history.filter( v => v.profit < 0 ).length
    return Math.max( result, 0 )
  }
  
  get voyageProfitFactor() {
    let result = 2
    if ( this.voyage.zone === 'china' ) {
      result += 1
    }
    if ( this.voyage.zone === 'east-indies' ) {
      result += 1
    }
    return result 
      + this.historyLengthFactor
      + this.voyageLengthFactor
  }

  get voyageLengthFactor() {
    return this.voyage.length > 14 ? -1 : 0
  }

  get historyLengthFactor() {
    return this.history.length > 8 ? 1 : 0
  }
}

class ExperiencedChinaRating extends Rating {

  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2
    return Math.max( result, 0)
  }

  get voyageProfitFactor() {
    return super.voyageProfitFactor + 3
  }

  get historyLengthFactor() {
    return this.history.length > 10 ? 1 : 0
  }

  get voyageLengthFactor() {
    const result = 3

    if ( this.voyage.length > 12 ) {
      result += 1
    }
    if ( this.voyage.length > 18 ) {
      result -= 1
    }
    return result
  }

}

function createRating( voyage, history ) {
  return voyage.zone === 'china' 
    && history.some( v => 'china' === v.zone )
    ? new ExperiencedChinaRating( voyage, history )
    : new Rating( voyage, history )

}
const voyage = { zone: 'west-indies', length: 10 }
const history = [
  { zone: 'east-indies', profit: 5 },
  { zone: 'west-indies', profit: 15 },
  { zone: 'china', profit: -2 },
  { zone: 'west-africa', profit: 7 },
]

const myRating = rating( voyage, history )
console.log( `The rating was: ${ myRating }` )