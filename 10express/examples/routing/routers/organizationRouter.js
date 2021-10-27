const express = require('express');
const router = express.Router();


router.get('/', function(request, response) {

  return response.json({
    user: {
      id: 1,
      name: 'ScaleUp Velocity'
    }
  })
})

router.post('/add', function(request, response) {
  
  /*
  
  * const organazation = getOrganization();
  * const user = getUser();
  * organization.add(user);
  * 
  * */
  
  return response.json({
    success: true,
    message: 'You have added user to organization successfully'
  })
})

module.exports = router;
