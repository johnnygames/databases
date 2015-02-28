var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {

    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('controller get');
      models.messages.get(function (data) {
        res.status(200);
        res.send({results: data});
      });
    }, 

    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log('controller post');
      models.messages.post(req, function () {
        res.sendStatus(201);
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

