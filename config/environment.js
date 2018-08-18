const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev'; //so far we got production or developement
const dbURI = process.env.DB_URI || `mongodb://localhost/sinatra-${env}`;
const secret = process.env.SECRET || 'blueeyes';
module.exports = { port, dbURI, secret };
