const express=require("express");//it will load express package in our app 
 
const app=express()//creating an app object...

//route creation...

//this is our home route...
app.get("/",(req,res)=>{
    res.write("<h1>Express.js</h1>")
    res.write("<p>Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</p>")
     res.end()
})
//assigning a port...
app.listen(8000);