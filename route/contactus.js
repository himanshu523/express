const express =require('express');
const path = require('path');

const route = express.Router();

const contactConteroller = require('../controllres/contact');



route.get('/',contactConteroller.getContactForm);

module.exports=route;