const express= require("express");
const apt=express();
apt.use(express.static(__dirname+'/UI'))
apt.get('/',(req,res) => {
    res.sendFile(__dirname+'/UI/index.html');
});
apt.get('/api/v1/questions/',(req,res) => {
    res.send('Hello World');
});

var fs = require('fs');
fs.writeFile("test.txt", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});
apt.listen(8080);

