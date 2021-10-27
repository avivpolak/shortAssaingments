const operatingSystem = require('../operatingSystem');

const middleware = function(request, response, next) {
  console.log(request.query)
  const { os } = request.query;

  if (!os || typeof os !== 'string') {
    response.status(401).json('Missing OS query param!')
  }

  operatingSystem.name = os;

  next();
}

module.exports = middleware;
