var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://postgres:olubukola@localhost:5432/StackOverflow-lite')

db.connect()
    .then(obj => {
        obj.done(); 
        console.log('conected baby!');
        // success, release the connection;
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });
    db.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    }); 