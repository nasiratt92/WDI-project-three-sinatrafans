const rp = require('request-promise');  //make http request from backend
function listAlbums(req, res, next) {
  console.log('made it to controller');
  rp({
    method: 'GET',
    url: 'https://itunes.apple.com/lookup?id=171366&entity=album',
    json: true
  })
    .then(response => res.json(response.results))
    .catch(next);
}
module.exports = {
  listAlbums

};
