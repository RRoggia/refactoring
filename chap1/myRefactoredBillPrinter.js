import plays from './plays.js'
import invoices from './invoices.js'

function statement( invoice, plays ) {
  let aStatement = {
    customer: invoice.customer,
    plays: [],
    totalAmount: 0,
    volumeCredits: 0
  }

  for ( let perf of invoice.performances ) {
    const play = plays[ perf.playID ]
    let amount = calculatePricingFor( perf.audience, play.type )
    let credit = calculateCreditFor( perf.audience, play.type )
    
    aStatement.plays.push( { 
      name: play.name,
      amount,
      audience: perf.audience
    } )
    aStatement.totalAmount += amount
    aStatement.volumeCredits += credit
  }

  return generateStatement( aStatement )
}

function generateStatement( aStatement ) {
  const format = new Intl.NumberFormat( "en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  } ).format

  let result = `Statement for ${ aStatement.customer }\n`

  for( let play of aStatement.plays) { 
    result += `${ play.name }: ${ format( play.amount / 100 ) } (${ play.audience } seats)\n`
  }

  result += `Amount owed is ${ format( aStatement.totalAmount / 100 ) }\n`
  result += `You earned ${ aStatement.volumeCredits } credits\n`
  return result
}

function calculatePricingFor( audience, type ) {
  let price = 0;
    
  switch( type ) {
    case 'tragedy':
      price = 40000
      if ( audience > 30 ) {
        price += 1000 * ( audience - 30 )
      }
      break
    case 'comedy': 
      price = 30000
      if ( audience > 20 ) {
        price += 10000 + 500 * ( audience - 20 )
      }
      price += 300 * audience
      break;
    default:
      throw new Error( `unknown type:${ play.type }` )
  }
  return price;
}

function calculateCreditFor( audience, type ) {
  let credit = Math.max( audience - 30, 0 )
  if ( "comedy" == type ) {
    credit += Math.floor( audience / 5 )
  }
  return credit
}

console.log( statement( invoices[0], plays ) )
