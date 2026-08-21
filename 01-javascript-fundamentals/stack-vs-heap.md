## Stack vs Heap

### STACK
- Stores: primitives (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`)
- Also stores: references/addresses that point into the heap
- Assignment (`b = a`) copies the **VALUE** → two fully independent variables

### HEAP
- Stores: objects, arrays, functions (anything non-primitive)
- Variables on the stack don't hold the object itself — they hold a reference (address) to where it lives on the heap
- Assignment (`obj2 = obj1`) copies the **REFERENCE**, not the object → both variables point to the SAME object → mutating one affects both

### Rule of Thumb
- **Primitive** → copy = independent copy (safe to change one without affecting the other)
- **Object/Array** → copy = shared reference (changing one changes both)

### Mental Picture

```
STACK                     HEAP
myName: "Fareed"
fullName: "Muhammad..."

userOne:  0x001  ────►  { name: "John", id: 10 }
userTwo:  0x001  ────►  (same address — same object)
```