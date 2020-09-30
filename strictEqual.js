const strictEquals = (valueA, valueB) => {
  if (Object.is(valueA, valueB)) {
    return true
  } else {
    return false
  }
}

module.exports = strictEquals
