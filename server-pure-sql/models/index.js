var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('models get');
      db.get(callback);
    }, // a function which produces all the messages
    post: function (req, callback) {
      console.log('models post');
      db.post(req, callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

