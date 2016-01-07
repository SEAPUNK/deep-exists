# deep-exists

Easy checking for existence. Returns true if value is not `null` or `undefined`.

```javascript

import exists from 'deep-exists'

const a = {
  b: {
    c: 4,
    d: null
  }
}

exists(a) // true
exists(a, 'b') // true
exists(a, 'c') // false
exists(a, 'c.a') // false
exists(a, 'b.c') // true
exists(a, 'b.d') // false
exists(a, 'b.e') // false

```
