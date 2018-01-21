import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'login'
  });
});

router.post('/login/submit', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  res.render('home', {
      username: username,
      password: password,
      title: 'succes'
  });
});

export default router;
