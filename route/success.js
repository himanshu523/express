const express =require('express');
const route =express.Router();
const path = require('path');

const successControllers = require('../controllres/successc')


route.post('/',successControllers.getsuccess);

module.exports = route;

