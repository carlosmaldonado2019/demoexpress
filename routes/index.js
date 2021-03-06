var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var db;
var session = require('express-session');
MongoClient.connect('mongodb://localhost:27017/caceca', (err, database) => {
  if (err) return console.log(err);
  db = database.db('caceca');
});

router.get('/', (req, res) =>{
  res.render('index', { footer: '© 2019 - D.R.© Universidad Autónoma de Baja California | Facultad de Ciencias Administrativas | Mexicali Baja California' });
});

router.post('/', (req,res) =>{
  db.collection('usuarios').findOne({ usuario: req.body.user }, (err,user) =>{
    if(!user) {
      return res.status(404).json({
        err: 'Usuario y/o password incorrectos'
      });
    }

    session.usuario = req.body.user;
    session.islogged = true;
    return res.redirect('home');
  });
    //return res.redirect('users/create');
});
module.exports = router;
