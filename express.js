const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
var hbs = require('hbs');
app.set('view engine', 'hbs');
// app.use((req,res,next) => {
//   console.log(req.method);
//   console.log(req.url);
//   next();
// });
// app.use((req,res,next) => {
//   res.render('maintenance.hbs');
// });


// hbs.registerPartials(__dirname + '/views/partials/');
// hbs.registerHelper('currentDateYear',() => {
//   return new Date().getFullYear();
// })
// hbs.registerHelper('screamIt', (text) => text.toUpperCase());



app.use(express.static(__dirname + '/public'));
app.get('/',(req,res) => {
  res.render('home.hbs',{
    // titlePage:"ShulavkarkiTitle",

  });
});
// app.get('/about',(req,res) => {
//   res.render('about.hbs',{
//     titlePage:"ShulavkarkiTitle",
//
//   });
// });
app.listen(port,() => {
  console.log(`Port ${port} is up and running.`);

});
