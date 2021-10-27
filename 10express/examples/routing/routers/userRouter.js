const express = require('express');
const router = express.Router();


router.get('/', function(request, response) {

  return response.json({
    user: {
      id: 1,
      name: 'Max'
    }
  })
})

router.get('/create', function(request, response) {

  // createUser({ ... })

  return response.json({
    success: true,
    message: 'User created succesfully'
  })
})

module.exports = router;
