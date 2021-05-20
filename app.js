//npm i express/nodemon=>node monitor
//How to we start listening to the server

const express=require('express');
const bodyPaarser=require('body-parser');
const app=express();
const mongooose=require('mongoose');
require('dotenv/config');

app.use(bodyPaarser.json());

//import routes

const postRoute=require('./route/posts');
app.use('/posts',postRoute);



//Middleware
// app.use('/posts',()=>{
//     console.log('this is middleware running');
// });


// //Routes

// app.get('/',(req,res)=>{
//     res.send('we are on home');
   
// });

// app.get('/post',(req,res)=>{
//     res.send('we are on post');
    
// });
//ConnectToDb


mongooose.connect(process.env.DB_CONNECTION,

{ useNewUrlParser: true },
()=>{
    console.log('connected to db')
});



app.listen(3000,()=>console.log('listening to 3000 port'));
