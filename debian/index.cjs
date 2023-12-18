const m = require('./dhnodejsBundle.cjs')
// old API
const c = (...args) => { m.pkgUp(...args) }
c.sync = m.pkgUpSync
// new API
c.pkgUp = m.pkgUp
c.pkgUpSync = m.pkgUpSync
module.exports = c
