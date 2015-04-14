# Bug with Babel's `external-helpers`

Run `npm run build`.

Instead of bundling the files together, the following error is thrown:

```
Error: Cannot find module 'babel/external-helpers' from '/your/folder/location/external-helpers-bug'
```

`foobar.js` is where the `require('babel/external-helpers')` is located.
