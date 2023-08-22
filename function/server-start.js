const {makeUserDb}=require('../data-access/index');
var nodemailer = require('nodemailer');

module.exports.startServer=async function () {
    await makeUserDb.UpdateUser();
  
 
}