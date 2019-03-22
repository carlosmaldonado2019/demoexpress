var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var db;

MongoClient.connect('mongodb://localhost:27017/star-wars-quotes', (err, database) => {
  if (err) return console.log(err);
   db = database.db('star-wars-quotes');
});
/* GET users listing. */
router.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err,result) => {
    if(err) return console.log(err);
    res.render('users',{quotes:result});
  });
});

router.post('users/create', (req,res) => {
  db.collection('quotes').save(req.body,(err,result) => {
    if(err) return console.log(err);
    console.log('saved to database');
    res.redirect('/');
  });
});

module.exports = router;
