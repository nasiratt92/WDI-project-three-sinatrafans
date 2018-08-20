const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev'; //so far we got production or developement
const dbURI = process.env.DB_URI || `mongodb://localhost/sinatra-${env}`;
const secret = process.env.SECRET || 'blueeyes';
const ticketmasterApiKey = process.env.TM_API_KEY;
module.exports = { port, dbURI, secret, ticketmasterApiKey };
