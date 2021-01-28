# SLibrary

JS Library, each method needs a callback as parameter, this library contains the next array methods:
- Seach: Loops thorugh the array and invokes the callback for each element.
- Sfilter: Return an array that contains the elements that satisfy the callback restriction.
- Smap: Applies the callback modifications to the array and return the new one as a copy.
- Sfind: Return the first element that satisfies the callback restriction.
- SfindIndex: Returns the first index of the first element that satisfies the callback restriction.
- Scontains(value, fromIndex): Return true if the array contains __value__ , in a position that is ahead the __fromIndex__ position. Othewise, return false.
- Spluck(key): Works with objects and return an array of the values of all the __key__ properties of the object.
- Swithout(values): __values__ is an array and the method return a copy of the array without this values.

In the master branch the methods work as an object property, while in the Prototype branch, the methods work as __proto__ methods for Array object.
