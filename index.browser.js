window.deepSealer = function deepSealer(o) {
  Object.keys(o).forEach(key => {
    if (!Array.isArray(o[key]) && typeof o[key] === 'object' && o[key] !== null)
      o[key] = deepSealer(o[key])
  })
  return Object.seal(o)
}
