//JavaScript Execution Context
/* 1. What is Execution Context?
An Execution Context (EC) is the environment in which JavaScript code is evaluated and executed.
It keeps track of information needed to execute the code, including variables, functions, and the current execution state.

In simple words, an execution context is the environment in which JavaScript code runs.

Types of Execution Context
1. Global Execution Context (GEC) — Created for the main code outside functions.
2. Function Execution Context (FEC) — Created when a function is called.
3. Eval Execution Context — Associated with code executed using eval(). It is rarely used in modern JavaScript.

2. Global Execution Context (GEC)
The Global Execution Context is created when JavaScript starts executing a script.
*/ 


/*3. Phases of Execution Context
For learning purposes, we commonly divide execution into two phases:
Phase 1: Memory Creation Phase
During this phase, JavaScript prepares bindings for declarations in the current execution context.
For example:
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

Conceptually, the global environment prepares these bindings:
| Declaration | Initial state during setup |
|---          |                         ---|
| `val1`      |         Uninitialized      |
| `val2`      |         Uninitialized      |
| `addNum`    |       Function available   |
| `result1`   |        Uninitialized       |
| `result2`   |        Uninitialized        |
Important: let and const bindings exist before their declaration executes, but they cannot be accessed until initialization. This period is called the Temporal Dead Zone (TDZ).


Phase 2: Execution Phase
During this phase, JavaScript executes statements and evaluates expressions.
4. Function Execution Context (FEC)
A Function Execution Context is created whenever a function is called.
When addNum(10, 5) is called, a new function execution context is created.
*/ 

/*5. What is the Call Stack?
The Call Stack is a Last In, First Out (LIFO) structure used to manage active function calls.
In simple words, the last function called is the first function to finish and leave the stack, assuming normal synchronous execution.

function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Hello JavaScript");
}

first();






How the Call Stack Works
1. first() is called.
2. first() calls second().
3. second() calls third().
4. third() prints "Hello JavaScript".
5. third() finishes and leaves the stack.
6. second() finishes and leaves the stack.
7. first() finishes and leaves the stack.
*/ 