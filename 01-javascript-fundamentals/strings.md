# JavaScript String Methods — Notes

## String Interpolation
Embed variables/expressions directly inside a string using backticks and `${ }`.

```javascript
const myName = "Fareed";
console.log(`My name is ${myName}`);
```

---

## indexOf() + slice() — Extracting Substrings
- `.indexOf(substring)` → returns the position where a substring FIRST appears (or -1 if not found)
- `.slice(start, end)` → extracts characters from `start` up to (not including) `end`

```javascript
let email = "hameedhussein@gmail.com";
let atIndex = email.indexOf("@");           // 13
let username = email.slice(0, atIndex);      // "hameedhussein"
```

⚠️ `.indexOf()` searches for the exact substring given — searching for a single
letter (`"h"`) instead of a full word (`"hussein"`) will match the FIRST
occurrence, which may not be the one you want.

---

## new String() — AVOID
`new String("text")` creates a String OBJECT, not a primitive.
- `typeof` returns `"object"`, not `"string"`
- `===` comparisons break (object vs primitive never match)
- Even an empty `new String("")` is truthy (all objects are truthy)

**Always use a plain string literal instead:**
```javascript
let email = "hameedhussein@gmail.com"; // ✅
```

---

## Reversing a String
Strings don't have a `.reverse()` method — arrays do. Two approaches:

**Manual loop (builds understanding of indexing + accumulation):**
```javascript
let b = "ABC";
let arr = [];
for (let i = b.length - 1; i >= 0; i--) {
    arr.push(b.at(i));
}
// arr = ["C", "B", "A"]
```

**Shortcut idiom (common in real code):**
```javascript
let reversed = b.split("").reverse().join("");
// "CBA"
```

⚠️ `.slice()` CANNOT reverse a string — it always reads left to right,
regardless of what start/end values (even negative ones) you give it.

---

## trim()
Removes whitespace from the start and end of a string (not the middle).

```javascript
let city = " Lahore  ";
city.trim(); // "Lahore"
```

---

## replace()
Returns a NEW string with the first match replaced — does NOT modify the
original, and does NOT auto-save unless you assign the result.

```javascript
let car = "Honda";
car.replace("Honda", "BMW"); // returns "BMW", but `car` is still "Honda"
car = car.replace("Honda", "BMW"); // now car actually becomes "BMW"
```

---

## includes()
Checks if a substring/character exists anywhere in the string. Returns `true`/`false`.

```javascript
"Honda".includes("a"); // true
```

---

## split()
Breaks a string into an ARRAY, dividing at every occurrence of the given separator.

```javascript
"hameedhussein@gmail.com".split("@");
// ["hameedhussein", "gmail.com"]
```