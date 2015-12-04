module.exports = function (obj, sub) {
  if (sub) {
    sub = sub.split('.')
  }

  if (obj === null || obj === undefined) return false

  if (!sub) return true

  var current = obj
  var prop
  for (var i = 0; i < sub.length; i++) {
    prop = sub[i]
    if (current[prop] === null || current[prop] === undefined) return false
    current = current[prop]
  }

  return true
}
