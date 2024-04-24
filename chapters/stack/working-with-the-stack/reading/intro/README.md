# Introduction

## Terminology

In software engineering, a "stack" is a data structure used to hold data, mirroring a real-life stack of objects (for example, a stack of books, or a stack of boxes).
This data structure's usefulness comes from optimizing the ease and speed at which elements can be added or removed from the top of the stack. It forces us to think about how our data is organized relative to the stack's base and top.
The usual operations with the stack are:

- `push` - add an element to the top of the stack
- `pop` - get the element from the top of the stack **and remove it**
- `peek` or `top` - get the element from the top of the stack **without removing it**

![An image showing a stack data structure at different stages. The empty stack gains the element labeled "1" after the instruction "push 1" is applied to it. After the instruction "push 2", the stack has two items, element 1 being below element 2. Finally, the "pop" instruction makes the stack lose element 2](../../media/the-stack.drawio.svg)

As the above image suggests, the order in which items are inserted and removed from a stack is represented by the phrase "first in, last out".

## So, why is it useful?

In the previous chapter we learned how to work with the basics of assembly.
A pretty big limitation we have imposed on ourselves by using such a low-level language is the small number of values we can work on at a time.
For anything but small programs, having just the 6 registers (`eax`, `ebx`, `ecx`, `edx`, `esi`, `edi`) is usually not enough, and creating global variables for temporary values is not memory efficient and, at some point, we'll struggle to even name them something reasonable!

As you might have guessed, the solution to this is to use a stack on which we can put arbitrary values onto.
We don't need implement it ourselves - it comes built-in 😄!
Whenever a program stars, the kernel makes sure a zone of memory is allocated for the sole purpose of writing arbitrary data onto.
Moreover, CPUs also have some specialized instructions that work directly with this memory in a way similar to how a normal stack works.

> **Note**: The size of the stack memory area is often [set at compile-time](https://stackoverflow.com/questions/54821412/how-to-increase-stack-size-when-compiling-a-c-program-using-mingw-compiler).
> When going over the maximum allocated space, you can receive a Segmentation Fault, and the phenomen is called a `Stack Overflow`.
> You will have probably received this error when you declare a local array with a very high capacity, or when calling a recursive function which never returns.

![poza cu memory layout here]()
