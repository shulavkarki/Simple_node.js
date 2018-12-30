const express = require('express');
const app = express();
var hbs = require('hbs');
app.use((req,res,next) => {
  console.log(req.method);
  console.log(req.url);
  next();
});
// app.use((req,res,next) => {
//   res.render('maintenance.hbs');
// });
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials/');
hbs.registerHelper('currentDateYear',() => {
  return new Date().getFullYear();
})
hbs.registerHelper('screamIt', (text) => text.toUpperCase());


app.set('view engine', 'hbs');
app.get('/',(req,res) => {
  res.render('home.hbs',{
    titlePage:"ShulavkarkiTitle",

  });
});
app.get('/about',(req,res) => {
  res.render('about.hbs',{
    titlePage:"ShulavkarkiTitle",

  });
});
app.listen(3000,() => {
  console.log("Port 3000 is up and running.");
  
});
