const fs = require("fs");
const users =  require("./users.json")
const express = require("express");
const app = express();





app.get("/",function(req,res){
    res.sendFile(__dirname + "/users.json");
});

app.listen(3000,function(){
    console.log("Server is now active on localhost:3000");
});




//reading the file:-
fs.readFile('./users.json','utf-8',(error,data)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(JSON.parse(data));
});

// defining new users
let user = {
    name: "Vishwanath",
    age: "22",
    gender: "M",
    language: "Manglore"
};

//adding new data to users object
users.push(user);

//writing to the file
fs.writeFile("users.json",JSON.stringify(users),err => {

    if (err) throw err;

    console.log("done writing to the file"); //success
});

