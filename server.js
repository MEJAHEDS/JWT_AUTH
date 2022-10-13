const express= require("express");
const jwt = require("jsonwebtoken");
const bodyParser=require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


let secretKey="hahaha";
    const data =
        [
            {
            film:"titanic",
            year:1991,
             },
            {
            film:"silent",
            year:2016,
             },

        ]

        function CreateToken(req,res,next){
        
            const user= {username:req.body.username} // user={username:"soufiane"}
            
            jwt.sign(user,secretKey,(err,resultat)=>{

                if(err){
                    res.json({error:err})
                }else{
                    res.json({token:resultat})
                }
            });
            next();
     
     
        };


        app.post('/login',CreateToken,(req,res)=>{
        });


    





app.listen(3000,() => {

    console.log("server en marche!!  ");
});