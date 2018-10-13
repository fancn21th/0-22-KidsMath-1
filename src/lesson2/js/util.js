define('util', function() {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  return {
    random,
  }
})
