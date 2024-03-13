# Author's notes on the systems-cs-pub-ro/iocla 'stack' laboratory

## Chapter "Terminologie"
### Purpose
- What is the stack as a data structure
- What is the stack in assembly (overview)
- What is it used for (overview)
            
### Comments
I think the first point (what is a stack as a data structure) could use some love from some images. The sentence 'first come, first served' doesn't really help me understand it alone. On the other hand, the students might already have gathered this knowledge in the "SDA" (Data structures and Algorithms) course. I think a different section inside the reading material that goes briefly into pure stack theory would be sufficient. If a student already knows this material, they can skip it. The second part about how it is useful could be included both in the pure-theroy part, and in the next part, or just the next part. 

## Chapter "Utilitatea stivei"
### Purpose
- Expands upon the previous "What is it used for"
    - Mentions its use in function calls (though does not go into detail)
    - Mentions saving of registers on function calls
    - Saving temporary values

### Comments
I'm pretty mixed on this one. It heavily mentions functions, though how they work is only explained in the next laboratory. I don't remember how I reacted when I saw this - I feel like I glossed over it and skipped it. It is a lot of information that teaches me not a lot. This is explained in more detail in the next laboratory and we don't need to have some granular motivation for every laboratory. "How it is useful?" sure, but not staying in an akward middle ground between "no detail" and "detailed", where it wants to say something but it can't because the concepts haven't been taught yet.

In the rework I think I will refactor this so it shows an example of how we can "run out of space" with our registers, and leave a brief mention of functions.

## Chapter "Operatii asupra stivei"
### Purpose
- Teaches `push` and `pop`
- Teaches about the use of the `esp` pointer and how/why/when to increment it and decrement it
- Diagramn showin how it grows towards smaller addresses (needs to be redone)
- MIPS mentioned :pog:
- push/pop and sub & mov equivelency
- Warning about ~~misaligning the stack~~, and stack overflow

### Comments
Good overall, this is the main course of the laboratory. However I don't really like the diagram and its placemenet within the lab reading material. Should be near the start, not the end. Overall the ordering could use some more love. Stack misalingment (as in not an equal amount of pops and pushes) should also be mentioned. 

## Chapter "Stiva in contextul spatiului de adresa a unui proces"
### Purpose
- Memory zones (+ image)

### Comments
Very good, very well done, though the heap could get mentioned a bit more. I would also like an additional chapter at the end comparing the differences between the stack and the heap and why it is sometimes said that "the heap is slower than the stack". Though this would 100% get shoved at the end of the lab.

## Chapter "Tricks and tips"
### Purpose
1. number of `push` == number of `pop`
2. add instead of multiple useless pops
3. Reset esp using ebp instead of multiple pops.

### Comments
Regarding the cotent:
1. Good tip. Bad motivation. Would leave me infurriated as to how I am teased with the knowledge of functions, and I am not explained how it works. BAD. Leaves questions more than it answers.
2. Good, actually
3. Different item yet linked to 2? Maybe a chapter or headingtalking about ebp could be useful here instead of these 2 tips. Also mentions stack frames when the student has no idea what they are.

Overall, these aren't "tips and tricks" but actually more learning material. Should be scattered along in their relevant parts.

## Exercises:
- Exercise 0 - I've got beef with it.
- Ex 1 -> Small, simple, testes you understand push/pop --- AMAZING!
- Ex 2 -> I like it. Bump in difficulty, but it's good :)
- Ex 3 -> Conceptually it's good, but it has some implementation flaws;
    - Solution file doesn't match problem statement
    - Should specify if you want push to be replaced only for the first part or all parts (I think it should be only the first part)
    - In general, I think an output after the every part should be included. You don't need to read the entire statement to start solving.

- Ex 4 -> While I understand the idea behind this exerccise (move variables from global scope to local scope), the execution is again faulty. 
    - First, after finishing the exercise (and in the solution file), the arrays STILL live in `.data`. All we did was an (extra) copy of both of them. At least result array was moved to the stack. An explicit "conclusion" to this would be nice, or move all arrays to the stack.
    - I am ashamed to admit how long I spent trying to debug a segfault, only to discover that I forgot to reset the stack at the end of the function (〒▽〒) . A remainder will be nice here :)
    - Maybe revise it so you have to move 2 arrays to the stack, not three. You have to store the pointers on ESI, EDI and **ESP**, without doing quite a major rework of the code to include the use of the stack for "temporary values". Using ESP raw like that is a bit cursed, but totally understandable.
    - The problem statement feels a bit unclear.
    - Some comments in the solution file for guidance? Solution file isn't that important with a lab attendand present, but could be useful when redoing the exercises at home to prep yourself before the exam.
- Ex 5 -> A bit too simple for a bonus. It's good, (though you don't have to understand the code, just guess where the result may lie). Overall good, but I think ex 4 and ex5 swap places. Or maybe move back ex 5 some more?

## Demo files
What are they for?



