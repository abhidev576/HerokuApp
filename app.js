const express = require('express');
const chalk = require('chalk');
// const bodyparser= require('body-parser')
// var emprouter = require('./src/routes/emprouter');

var app = new express();

// app.use(bodyparser.urlencoded({extended:true}))
// app.set('views', './src/views');
// app.set('view engine', 'ejs');

// app.use('/emp', emprouter);

app.get("/",function(req,res){
   // res.send("jhgjhgjhgh")
   res.render("welcome")
})


const port=process.env.PORT || 3000
app.listen(3000, function () {
    console.log("listen to port " + chalk.red('3000'));
});