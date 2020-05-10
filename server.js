const express = require('express')
const db  = require('./db1')


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const saltrounds = 10;
// const db = require('./db');




app.use(bodyParser.json());
app.use('/',express.static('public'));
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: "I love salsa"}));
app.use(passport.initialize());
app.use(passport.session());



// Form Endpoint
app.post('/login', passport.authenticate('local', 
    {
        successRedirect: '/index.html',
        failureRedirect: '/'
    }
))







passport.use(new passportLocal(
  function(username, password, done){
      db.getfromDb(username, function(pass){
          pass = pass[0].password;
          bcrypt.compare(password, pass, function(err, res) {
              if(res)  return done(null, username)
              else  return done(null, false, {message: 'Password is incorrect'})
          });   
      })
  }
  
))
// Serilize Logic
passport.serializeUser(function(user, done){
  done(null, user)
})
passport.deserializeUser(function(user, done){ 
  done(null, user)
})



app.get('/index.html', (req, res)=>{
  res.send('Login Sucessful' + req.user);
})

// User Validation
app.get('/addCart', (req, res)=>{
  if(req.user) res.send("Access")
  else res.send('Access Denied')
})

app.post('/signup', (req, res)=>{

  
  let name = req.body.username;
  let password = req.body.password;
  bcrypt.hash(password, saltrounds, function(err, hash){
      if(err) throw err;
      db.InsertintoDb(name, hash, function(){
          res.send("sign up successful");
      })
  })
 
 
})
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


var port = process.env.port || 3000;

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))

app.use('/', express.static(__dirname + '/public'))

const routes = {

  // products: require('./routes/products'),
  users: require('./route/user'),
  products: require('./route/product')
}



app.use('/users', routes.users)
app.use('/products', routes.products)


app.listen(port, function(){
  console.log("Server running on " + port);
  db.connection.connect(); 
})





