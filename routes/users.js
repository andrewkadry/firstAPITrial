var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    subjects : [{subject1 : 'anaaalysis' , subject2 : 'AI assignment'}]
  });
});

router.post('/andrewByfham', function (req,res,next) {
  const SN = req.body.subjectName;
  const SC = req.body.subjectCode;
  // Create post in db
  res.status(201).json({
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), subjectName: SN + ":P", SubjectCode: SC }
  });
});

module.exports = router;