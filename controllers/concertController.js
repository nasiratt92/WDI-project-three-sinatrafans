const rp = require('request-promise');
const { ticketmasterApiKey } = require('../config/environment');

function list(req, res, next) {
  rp({
    method: 'GET',
    url: `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketmasterApiKey}&keyword=frank%20sinatra`,
    params: {
      apikey: ticketmasterApiKey,
      keyword: 'frank sinatra'
    },
    json: true
  })

    .then(response => res.json(response._embedded.events))
    .catch(next);
}

module.exports = {
  list
};
