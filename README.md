# refactoring
This repo has the code from the book Refactoring - Improving the design of your code (2nd edition)

## Structure
Each chapter's code has a specific folder with the chapter name (example: `chap6` or `chap11`).

From chapter 6 onwards you will find two folders inside the chapter's folder `my-refactor` and `example`.
- `example`: It has the exact ( with minor changes to make code compile ) code from the book.
- `my-refactor`: It's a mix of my initial attempt to apply the refactoring technique after I read the refactoring's _Motivation_ section plus the learning from reading the author applying the refactoring technique in the book. 

## Comparison of refactorings from 1st and 2nd version
Below you can find two tables that relates the refactorings from the first and second version of the book. Each chapter has two tables, one table that has the index based on the first version and a table that the index is based on the second version. The second column has the representative in the opposite version of the index column.

You might find it useful if you are doing a book club where people have different versions of the book.

# V1 - Summary
**Chap 6 - Composing Methods**

| V1                                | V2                                    |
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



**Chap 7 - Moving Features Between Objects**

| V1                                   | V2                            |
| ------------------------------------ | ----------------------------- |
| Move Method                          | Move Function (CH 8)          |
| Move Field                           | Move Field (CH 8)             |
| Extract Class                        | Extract Class                 |
| Inline Class                         | Inline Class                  |
| Hide Delegate                        | Hide Delegate                 |
| Remove Middle Man                    | Remove Middle Man             |
| Introduce Foreign Method             |                               |
| Introduce Local Extension            |                               |



**Chap 8 - Organizing Data**

| V1                                                 | V2                                        |
| -------------------------------------------------- | ----------------------------------------- |
| Self Encapsulate Field                             | Encapsulate Variable (CH 6)               |
| Replace Data Value with Object                     | Replace Primitive With Object (CH 7)      |
| Change Value to Reference                          | Change Value to Reference (CH 9)          |
| Change Reference to Value                          | Change Reference to Value (CH 9)          |
| Replace Array with Object                          |                                           |
| Duplicate Observed Data                            |                                           |
| Change Unidirectional Association to Bidirectional |                                           |
| Change Bidirectional Association to Unidirectional |                                           |
| Replace Magic Number with Symbolic Constant        | Replace Magic Literal (CH 9)              |
| Encapsulate Field                                  | Encapsulate Variable (CH 6)               |
| Encapsulate Collection                             | Encapsulate Collection (CH 7)             |
| Replace Record with Data Class                     |                                           |
| Replace Type Code with Class                       | Replace Primitive With Object (CH 7)      |
| Replace Type Code with Subclasses                  | Replace Type Code with Subclasses (CH 12) |
| Replace Type Code with State/Strategy              | Replace Type Code with Subclasses (CH 12) |
| Replace Subclass with Fields                       | Remove Subclass(CH 12)                    |



**Chap 9 - Simplifying Conditional Expressions**

| V1                                            | V2                                                    |
| --------------------------------------------- | ----------------------------------------------------- |
| Decompose Conditional                         | Decompose Conditional (CH 10)                         |
| Consolidate Conditional Expression            | Consolidate Conditional Expression (CH 10)            |
| Consolidate Duplicate Conditional Fragments   | Slide Statement (CH 8)                                |
| Remove Control Flag                           | Replace Control Flag With Break (CH 10)               |
| Replace Nested Conditional with Guard Clauses | Replace Nested Conditional with Guard Clauses (CH 10) |
| Replace Conditional with Polymorphism         | Replace Conditional with Polymorphism (CH 10)         |
| Introduce Null Object                         | Introduce Special Case (CH 10)                        |
| Introduce Assertion                           | Introduce Assertion (CH 10)                           |

**Chap 10 - Making Method Calls Simpler**

| V1                                            | V2                                                |
| --------------------------------------------- | ------------------------------------------------- |
| Rename Method                                 | Change Function Declaration (CH 6)                |
| Add Parameter                                 | Change Function Declaration (CH 6)                |
| Remove Parameter                              | Change Function Declaration (CH 6)                |
| Separate Query from Modifier                  | Separate Query from Modifier (CH 11)              |
| Parameterize Method                           | Parameterize Function (CH 11)                     |
| Replace Parameter with Explicit Methods       | Remove Flag Argument(CH 11)                       |
| Preserve Whole Object                         | Preserve Whole Object (CH 11)                     |
| Replace Parameter with Method                 | Replace Parameter with Query (CH 11)              |
| Introduce Parameter Object                    | Introduce Parameter Object (CH 10)                |
| Remove Setting Method                         | Remove Setting Method (CH 11)                     |
| Hide Method                                   |                                                   |
| Replace Constructor with Factory Method       | Replace Constructor with Factory Function (CH 11) |
| Encapsulate Downcast                          |                                                   |
| Replace Error Code with Exception             | Replace Error Code with Exception (CH 11)         |
| Replace Exception with Test                   | Replace Exception with Precheck(CH 11)            |

**Chap 11 - Dealing with Generalization**

| V1                                            | V2                                        |
| --------------------------------------------- | ----------------------------------------- |
| Pull Up Field                                 | Pull Up Field (CH 12)                     |
| Pull Up Method                                | Pull Up Method (CH 12)                    |
| Pull Up Constructor Body                      | Pull Up Constructor Body (CH 12)          |
| Push Down Method                              | Push Down Method (CH 12)                  |
| Push Down Field                               | Push Down Field (CH 12)                   |
| Extract Subclass                              | Replace Type Code with Subclasses (CH 12) |
| Extract Superclass                            | Extract Superclass (CH 12)                |
| Extract Interface                             |                                           |
| Collapse Hierarchy                            | Collapse Hierarchy (CH 12)                |
| Form Template Method                          |                                           |
| Replace Inheritance with Delegation           | Replace Subclass with Delegate (CH 12)    |
| Replace Delegation with Inheritance           | Replace Superclass with Delegate (CH 12)  |

# V2 - Summary

**Chap 6 - A first set of Refactorings**
| V2                                | V1                                    |
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

**Chap 7 - Encapsulation**
| V2                            | V1                                    |
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

**Chap 8 - Moving Features**
| V2                                | V1                                                |
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

**Chap 9 - Organizing Data**
| V2                                  | V1                                                 |
| ----------------------------------- | -------------------------------------------------- |
| Split Variable                      | Split Temporary Variable (CH 6)                    |
| Split Variable                      | Remove Assignment to Parameter(CH 6)               |
| Rename Field                        |                                                    |
| Replace Derived Variable with Query |                                                    |
| Change Reference to Value           | Change Reference to Value (CH 8)                   |
| Change Value to Reference           | Change Value to Reference (CH 8)                   |
| Replace Magic Literal               | Replace Magic Number with Symbolic Constant (CH 8) |

**Chap 10 - Simplifying Conditional Logic**
| V2                                            | V1                                                   |
| --------------------------------------------- | ---------------------------------------------------- |
| Decompose Conditional                         | Decompose Conditional(CH 9)                          |
| Consolidate Conditional Expression            | Consolidate Conditional Expression (CH 9)            |
| Replace Nested Conditional With Guard Clauses | Replace Nested Conditional with Guard Clauses (CH 9) |
| Replace Conditional with Polymorphism         | Replace Conditional with Polymorphism (CH 9)         |
| Introduce Special Case                        | Introduce Null Object (CH 9)                         |
| Introduce Assertion                           | Introduce Assertion (CH 10)                          |
| Replace Control Flag with Break               | Remove Control Flag(CH 9)                            |

**Chap 11 - Refactoring APIs**
| V2                                            | V1                                                   |
| --------------------------------------------- | ---------------------------------------------------- |
| Separate Query from Modifier                  | Separate Query from Modifier (CH 10)                 |
| Parameterize Function                         | Parameterize Method (CH 10)                          |
| Remove Flag Argument                          | Replace Parameter with Explicit Methods (CH 10)      |
| Preserve Whole Object                         | Preserve Whole Object (CH 10)                        |
| Replace Parameter with Query                  | Replace Parameter with Method (CH 10)                |
| Replace Query with Parameter                  |                                                      |
| Remove Setting Method                         | Remove Setting Method (CH 10)                        |
| Replace Constructor with Factory Function     | Replace Constructor with Factory Method (CH 10)      |
| Replace Function with Command                 | Replace Method with Method Object (CH 6)             |
| Replace Command with Function                 |                                                      |
| Return Modified Value                         |                                                      |
| Replace Error Code with Exception             | Replace Error Code with Exception (CH 10)            |
| Replace Exception with Precheck               | Replace Exception with Test (CH 10)                  |

**Chap 12 - Dealing with Inheritance**

| V2                                            | V1                                           |
| --------------------------------------------- | -------------------------------------------- |
| Pull Up Method                                | Pull Up Method (CH 11)                       |
| Pull Up Field                                 | Pull Up Field (CH 11)                        |
| Pull Up Constructor Body                      | Pull Up Constructor Body (CH 11)             |
| Push Down Method                              | Push Down Method (CH 11)                     |
| Push Down Field                               | Push Down Field (CH 11)                      |
| Replace Type Code with Subclasses             | Replace Type Code with Subclasses (CH 8)     |
| Replace Type Code with Subclasses             | Replace Type Code with State/Strategy (CH 8) |
| Remove Subclass                               | Replace Subclass with Fields (CH 8)          |
| Extract Superclass                            | Extract Superclass (CH 11)                   |
| Collapse Hierarchy                            | Collapse Hierarchy (CH 11)                   |
| Replace Subclass with Delegate                | Replace Inheritance with Delegation (CH 11)  |
| Replace Superclass with Delegate              | Replace Delegation with Inheritance (CH 11)  |