const input = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766\n`

function acquireData( input ) {
  return input
    .split( '\n' )
    .slice( 1 )
    .filter( line => line.trim() !== '' )
    .map( line => line.split( ',' ) )
    .map( fields => [ fields[ 0 ].trim(), fields[ 1 ].trim(), fields[ 2 ].trim() ])
    .filter( fields => fields[ 1 ] === 'India' )
    .map( fields => ( { city: fields[ 0 ], phone: fields[ 2 ] } ) )
}

console.log( acquireData( input ) )