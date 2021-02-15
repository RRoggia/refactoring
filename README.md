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

| V2                                | V1                                    |
| --------------------------------- | ------------------------------------- |
| Extract Function                  | Extract Method                        |
| Inline Function                   | Inline Method                         |
| Extract Variable                  | Introduce Explaining Variable         |
| Inline Variable                   | Inline Temp                           |
| Change Function Declaration       | Rename Method (CH 10)                 |
| Change Function Declaration       | Add Parameter (CH 10)                 |
| Change Function Declaration       | Remove Parameter (CH 10)              |
| Encapsulate Variable              | Self-Encapsulate Fields (CH 8)        |
| Encapsulate Variable              | Encapsulate Fields (CH 8)             |
| Rename Variable                   |                                       |
| Introduce Parameter Object        |                                       |
| Combine Functions into Class      |                                       |
| Combine Functions into Transform  |                                       |
| Split Phase                       |                                       |

**Chap 7**

| V1                        | V2                            |
| ------------------------- | ----------------------------- |
| Move Method               | Move Function (CH 8)          |
| Move Field                | Move Field (CH 8)             |
| Extract Class             | Extract Class                 |
| Inline Class              | Inline Class                  |
| Hide Delegate             | Hide Delegate                 |
| Remove Middle Man         | Remove Middle Man             |
| Introduce Foreign Method  |                               |
| Introduce Local Extension |                               |
|                           | Encapsulate Record            |
|                           | Encapsulate Collection        |
|                           | Replace Primitive With Object |
|                           | Replace Temp With Query       |
|                           | Substitute Algorithm          |

| V2                        | V1                            |
| ------------------------- | ----------------------------- |
|                           |                               |

**Chap 8**

| V1                        | V2                            |
| ------------------------- | ----------------------------- |
|                           |                               |

| V2                        | V1                            |
| ------------------------- | ----------------------------- |
| Move Function             | Move Method  (CH 7)           |
| Move Field                | Move Field (CH 7)             |
