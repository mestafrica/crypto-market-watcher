import express from 'express';

const router = express.Router();

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


export default router;
