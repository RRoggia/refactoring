# refactoring
This repo has the code and from the Refactoring - Improving the design of your code (2nd edition)

## Structure
Each chapter's code has a specific folder with the chapter name (example: `chap6` or `chap11`).

From chapter 6 onwards you will find two folders inside the chapter's folder `my-refactor` and `example`.
- `example`: It has the exact ( with minor changes to make code compile ) code from the book.
- `my-refactor`: It's a mix of my initial attempt to apply the refactoring technique after I read the refactoring's _Motivation_ section plus the learning from reading the author applying the refactoring technique in the book. 

## Comparison of refactorings from 1st and 2nd version
Below you can find two tables that relates the refactorings from the first and second version of the book. Each chapter has two tables, one table that has the index based on the first version and a table that the index is based on the second version. The second column has the representative in the opposite version of the index column.

You might find it useful if you are doing a book club where people have different versions of the book.

**Chap 6**

| V1 - Composing Methods            | V2                                    |
| --------------------------------- | ------------------------------------- |
| Extract Method                    | Extract Function                      |
| Inline Method                     | Inline Function                       |
| Inline Temp                       | Inline Variable                       |
| Replace Temp With Query           | Replace Temp With Query (CH 7)        |
| Introduce Explaining Variable     | Extract Variable                      |
| Split Temporary Variable          | Split Variable (CH 9)                 |
| Remove Assignment to Parameter    | Split Variable (CH 9)                 |
| Replace Method with Method Object | Replace Function with Command (CH 11) |
| Substitute Algorithm              | Substitute Algorithm (CH 7)           |

| V2 - A first set of Refactorings  | V1                                    |
| --------------------------------- | ------------------------------------- |
| Extract Function                  | Extract Method                        |
| Inline Function                   | Inline Method                         |
| Extract Variable                  | Introduce Explaining Variable         |
| Inline Variable                   | Inline Temp                           |
| Change Function Declaration       | Rename Method (CH 10)                 |
| Change Function Declaration       | Add Parameter (CH 10)                 |
| Change Function Declaration       | Remove Parameter (CH 10)              |
| Encapsulate Variable              | Self Encapsulate Fields (CH 8)        |
| Encapsulate Variable              | Encapsulate Fields (CH 8)             |
| Rename Variable                   |                                       |
| Introduce Parameter Object        | Introduce Parameter Object (CH 10)    |
| Combine Functions into Class      |                                       |
| Combine Functions into Transform  |                                       |
| Split Phase                       |                                       |

**Chap 7**

| V1 - Moving Features Between Objects | V2                            |
| ------------------------------------ | ----------------------------- |
| Move Method                          | Move Function (CH 8)          |
| Move Field                           | Move Field (CH 8)             |
| Extract Class                        | Extract Class                 |
| Inline Class                         | Inline Class                  |
| Hide Delegate                        | Hide Delegate                 |
| Remove Middle Man                    | Remove Middle Man             |
| Introduce Foreign Method             |                               |
| Introduce Local Extension            |                               |

| V2 - Encapsulation            | V1                                    |
| ----------------------------- | ------------------------------------- |
| Encapsulate Record            | Replace Record with Data Class (CH 8) |
| Encapsulate Collection        | Encapsulate Collection (CH 8)         |
| Replace Primitive With Object | Replace Data Value with Object (CH 8) |
| Replace Primitive With Object | Replace Type Code with Class (CH 8)   |
| Replace Temp With Query       | Replace Temp With Query (CH 6)        |
| Extract Class                 | Extract Class                         |
| Inline Class                  | Inline Class                          |
| Hide Delegate                 | Hide Delegate                         |
| Remove Middle Man             | Remove Middle Man                     |
| Substitute Algorithm          | Substitute Algorithm (CH 6)           |

**Chap 8**

| V1 - Organizing Data                               | V2                                   |
| -------------------------------------------------- | ------------------------------------ |
| Self Encapsulate Field                             | Encapsulate Variable (CH 6)          |
| Replace Data Value with Object                     | Replace Primitive With Object (CH 7) |
| Change Value to Reference                          | Change Value to Reference (CH 9)     |
| Change Reference to Value                          | Change Reference to Value (CH 9)     |
| Replace Array with Object                          |                                      |
| Duplicate Observed Data                            |                                      |
| Change Unidirectional Association to Bidirectional |                                      |
| Change Bidirectional Association to Unidirectional |                                      |
| Replace Magic Number with Symbolic Constant        | Replace Magic Literal (CH 9)         |
| Encapsulate Field                                  | Encapsulate Variable (CH 6)          |
| Encapsulate Collection                             | Encapsulate Collection (CH 7)        |
| Replace Record with Data Class                     |                                      |
| Replace Type Code with Class                       | Replace Primitive With Object (CH 7) |
| Replace Type Code with Subclasses                  |                                      |
| Replace Type Code with State/Strategy              |                                      |
| Replace Subclass with Fields                       |                                      |

| V2 - Moving Features              | V1                                                |
| --------------------------------- | ------------------------------------------------- |
| Move Function                     | Move Method (CH 7)                                |
| Move Field                        | Move Field (CH 7)                                 |
| Move Statements into Functions    |                                                   |
| Move Statements to Callers        |                                                   |
| Replace Inline with Function Call |                                                   |
| Slide Statement                   | Consolidate Duplicate Conditional Fragment (CH 9) |
| Split Loop                        |                                                   |
| Replace Loop with Pipeline        |                                                   |
| Remove Dead Code                  |                                                   |

**Chap 9**

| V1 - Simplifying Conditional Expressions      | V2                                                    |
| --------------------------------------------- | ----------------------------------------------------- |
| Decompose Conditional                         | Decompose Conditional (CH 10)                         |
| Consolidate Conditional Expression            | Consolidate Conditional Expression (CH 10)            |
| Consolidate Duplicate Conditional Fragments   | Slide Statement (CH 8)                                |
| Remove Control Flag                           |                                                       |
| Replace Nested Conditional with Guard Clauses | Replace Nested Conditional with Guard Clauses (CH 10) |
| Replace Conditional with Polymorphism         | Replace Conditional with Polymorphism (CH 10)         |
| Introduce Null Object                         |                                                       |
| Introduce Assertion                           | Introduce Assertion (CH 10)                           |

| V2 - Organizing Data                | V1                                                 |
| ----------------------------------- | -------------------------------------------------- |
| Split Variable                      | Split Temporary Variable (CH 6)                    |
| Split Variable                      | Remove Assignment to Parameter(CH 6)               |
| Rename Field                        |                                                    |
| Replace Derived Variable with Query |                                                    |
| Change Reference to Value           | Change Reference to Value (CH 8)                   |
| Change Value to Reference           | Change Value to Reference (CH 8)                   |
| Replace Magic Literal               | Replace Magic Number with Symbolic Constant (CH 8) |


**Chap 10**

| V1 - Making Method Calls Simpler              | V2                                   |
| --------------------------------------------- | ------------------------------------ |
| Rename Method                                 | Change Function Declaration (CH 6)   |
| Add Parameter                                 | Change Function Declaration (CH 6)   |
| Remove Parameter                              | Change Function Declaration (CH 6)   |
| Separate Query from Modifier                  |                                      |
| Parameterize Method                           |                                      |
| Replace Parameter with Explicit Methods       |                                      |
| Preserve Whole Object                         |                                      |
| Replace Parameter with Method                 |                                      |
| Introduce Parameter Object                    | Introduce Parameter Object (CH 10)   |
| Remove Setting Method                         |                                      |
| Hide Method                                   |                                      |
| Replace Constructor with Factory Method       |                                      |
| Encapsulate Downcast                          |                                      |
| Replace Error Code with Exception             |                                      |
| Replace Exception with Test                   |                                      |

| V2 - Simplifying Conditional Logic            | V1                                                   |
| --------------------------------------------- | ---------------------------------------------------- |
| Decompose Conditional                         | Decompose Conditional(CH 9)                          |
| Consolidate Conditional Expression            | Consolidate Conditional Expression (CH 9)            |
| Replace Nested Conditional With Guard Clauses | Replace Nested Conditional with Guard Clauses (CH 9) |
| Replace Conditional with Polymorphism         | Replace Conditional with Polymorphism (CH 9)         |
| Introduce Special Case                        |                                                      |
| Introduce Assertion                           | Introduce Assertion (CH 10)                          |
