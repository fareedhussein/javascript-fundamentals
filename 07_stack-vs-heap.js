// ============================================
// STACK vs HEAP
// ============================================

// ---- STACK: Primitives (copied by VALUE) ----

let myName = "Fareed";
let fullName = myName;      // fullName gets its OWN COPY of "Fareed" on the stack

fullName = "Muhammad Fareed Arshad";  // only fullName's stack slot changes

console.log(myName);   // "Fareed"                    ← untouched, independent copy
console.log(fullName); // "Muhammad Fareed Arshad"    ← only this one changed


// ---- HEAP: Non-Primitives (copied by REFERENCE) ----

let userOne = {
    name: "John",
    id: 23
};
// userOne (on stack) holds a REFERENCE (address) pointing to
// the actual object { name: "John", id: 23 } which lives on the HEAP

let userTwo = userOne;
// userTwo does NOT get a new object.
// It gets a COPY of the REFERENCE (address) — both now point to the SAME heap object

console.log(userTwo); // { name: "John", id: 23 }

userTwo.id = 10;
// This mutates the object ON THE HEAP.
// Since userOne and userTwo point to the SAME object, BOTH are affected.

console.log(userOne.id); // 10   ← changed too, even though we only touched userTwo!
console.log(userTwo.id); // 10