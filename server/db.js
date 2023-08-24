var mongoose = require('mongoose');
var dbConfig = require('./configs/db.config.js');

mongoose.connect(dbConfig.dbURL).then(function () {
  console.log('DB connected!');
}).catch(function (err) {
  console.log('Db connection failed - ', err);
});