let output = 1

// import global Promise polyfill without 'finally'
Promise.resolve().then(function () {
  output = 2
})

export {
  output
}