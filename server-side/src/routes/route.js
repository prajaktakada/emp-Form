const express = require('express');

const router = express.Router();


const Emmp_Controller=require("../controllers/empcontroller")
router.post('/create_Emp',Emmp_Controller.create_Emp)
router.get('/getemp',Emmp_Controller.getemp)



module.exports = router;

