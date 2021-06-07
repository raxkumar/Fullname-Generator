const express=require("express");
const body = require("body-parser");
const app = express();
const port=(3000);

app.use(body.urlencoded({extended:true}));

app.get('/rakesh',(req,res)=>{
    return res.send("welcome rakesh");
});

app.get("/Fullname-Generator",(req,res)=>{
    return res.sendFile(__dirname+"/Fullname-Generator.html");
   
});

app.post("/Fullname-Generator",function(req,res){
        let first = (req.body.first);
        let second = (req.body.second);
        res.send("Welcome "+first+" "+second+"!");

});

app.listen(3000,(req,res)=>{
    console.log("live and running...");
});

