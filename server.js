const express= require("express");
const apt=express();
apt.use(express.static(__dirname+'/UI'))
apt.get('/',(req,res) => {
    res.sendFile(__dirname+'/UI/index.html');
});
apt.get
apt.listen(8080);
