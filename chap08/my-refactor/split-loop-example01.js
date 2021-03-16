function printYoungestAgeAndTotalSalary( people ) {
  let youngest = findYoungestPerson( people )
  let totalSalary = sumSalaries( people )
  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`
}

function sumSalaries(people) {
  return people
    .map( p => p.salary )
    .reduce( ( total, current ) => total += current, 0 )
}

function findYoungestPerson(people) {
  return Math.min( ...people.map( p => p.age ) )
}

console.log( printYoungestAgeAndTotalSalary( [
 { age: 20, salary: 1000.0 },
 { age: 23, salary: 4124.0 },
 { age: 40, salary: 1241.0 },
 { age: 60, salary: 2342.0 },
 { age: 10, salary: 9734.0 },
 { age: 85, salary: 8111.0 },
 { age: 32, salary: 1211.0 },
 { age: 29, salary: 5653.0 },
 { age: 31, salary: 1985.0 }
] ) )

