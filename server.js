const express= require("express");

const app = express();



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


app.get('/data',(req,res)=>{
    res.json(data);
})





app.listen(3000,() => {

    console.log("server en marche!!  ");
});