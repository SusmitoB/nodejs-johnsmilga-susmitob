# Tutorial #118 PUT vs PATCH

### while using the PUT we can pass one key in the findOneAndUpdate's option (overWrite) which tells that do update document with whatever is passed. Now for patch it is updating the only selected keys which are passed and nothing else.

#

#

# Tutorial #120 Not found

### if user is requesting some page or resource which is invalid, we will throw error message using one middlewere

#

#

# Tutorial #121 AsyncWrapper

### I had one doubt why John is using async await inside AyncWrapper as we are already calling "func" which is Async function. So, I came to know that each async function does return a promise. Read: https://stackoverflow.com/questions/56895695/why-do-i-need-to-await-an-async-function-when-it-is-not-supposedly-returning-a-p

### Another great article regarding async await and this one for react https://devtrium.com/posts/async-functions-useeffect https://codesandbox.io/s/misty-shape-d2lkir?file=/src/App.js

#

#

# Tutorial #122 custom error handler

### here we will see how the error is handled in the express framework. So, if we don't have a custom error handler then the error is handled in the last middlewere hence in the last tutorial (AsyncWrapper) we saw that the we are catching the error and passing the same in the next method. To handle the error by ourselves we must have syntax like

```
fucntion sampleMiddlewere(err, req, res, next) {
  return res.status(500).json({ isHandledByCutom: true, msg: err })
}
```
