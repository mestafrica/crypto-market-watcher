import express from 'express';

const router = express.Router();
const cmc_url = 'https://api.coinmarketcap.com/v1/';
const currencies = ['AUD', 'BRL', 'CAD', 'CHF', 'CLP', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PKR', 'PLN', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'ZAR'];


/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Crypto Monitor'
  });
});

router.get('/signin', (req, res) =>{
	res.render('signin',{
		title: 'Signin to Crypto'
	});
});

router.get('/signup', (req, res) =>{
  res.render('signup',{
    title: 'SignUp to Crypto'
  });
});

router.post('/', async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
  
    const r = await req.pool.query("SELECT * FROM users WHERE email = $1", [email]);

    console.log(r);

    if(r.rows.length < 1){
        console.log(r);
        res.render('login', {
          title: 'No user!!'
        });
    }
  
    console.log(r);
    res.render('login', {
      title: 'Crypto sale logged in'
    });
});

router.post('/submit-form', async (req, res) => {
  var pg = require("pg");
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var email = req.body.email;
  var password = req.body.password[1];

  const r = await req.pool.query("INSERT INTO users(firstname, lastname, email, password) VALUES($1, $2, $3, $4)", [firstname, lastname, email, password]);

  console.log(r);
  res.render('login', {
    title: 'Crypto sale'
  });
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
      title: 'Crypto Sale'
    });
});


export default router;