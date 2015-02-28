var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

dbConnection.connect();

exports.get = function (callback) {
  console.log('db get');
  dbConnection.query('SELECT * FROM messages', function (err, data) {
    if (err) throw err;
    callback(data);
  });
};

// syntax to use near '`username` = 'as;d%20fj%20asd', `roomname` = 'lobby', `text` = 'asd fasd fsd'' at line 1

exports.post = function (req, callback) {
  console.log('db post', req.body);
  var post = {
    username: req.body.username,
    roomname: req.body.roomname || "lobby",
    text: req.body.text
  };

  dbConnection.query('insert into messages (username, roomname, text) values ("' + req.body.username + '", "' + req.body.roomname + '", "' + req.body.text + '")',
    function (err) {
      if (err) throw err;
      callback()
  });
};

