var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) =>{

  res.render('index', { title: '© 2019 - D.R.© Universidad Autónoma de Baja California | Facultad de Ciencias Administrativas | Mexicali Baja California' });
});

router.post('/', (req,res) =>{

   res.json(req.body.user);
});

module.exports = router;
