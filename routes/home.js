var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var session = require('express-session');
/*
var db;

MongoClient.connect('mongodb://localhost:27017/caceca', (err, database) => {
    if (err) return console.log(err);
    db = database.db('caceca');
});
*/

router.get('/',(req,res) =>{
    if(session.islogged) {
        res.render('home',{
            usuario:session.usuario,
            title:"Sistema de Acreditación Nacional CACECA"
        })
    }
    else{
        res.send('Acceso no permitido');
    }
   // res.send(session.usuario);
   // res.render('home',{usuario:usuario})
});

module.exports = router;