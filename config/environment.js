
const env = process.env.NODE_ENV || 'dev'
const port = process.env.PORT || 4000
const dbURI = process.env.DB_URI || `mongodb://localhost/organised-${env}`
const secret = process.env.SECRET || 'secret'

module.exports = { env, dbURI, port, secret }
