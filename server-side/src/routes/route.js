const express = require('express');

const router = express.Router();


const Emmp_Controller=require("../controllers/empontroller")
router.post('/create_Emp',Emmp_Controller.create_Emp)




module.exports = router;

