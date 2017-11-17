const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const router = express.Router();

const crypto = require('crypto');
const User = require('../dao/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/:username', function(req, res) {
  res.render('user', {});
});

router.get('/post', function(req, res) {
  res.render('post', {});
});

router.get('/reg', checkNotLogin, function (req, res) {
  res.render('reg', {
    title: '注册新用户',
  });
});

router.post('/doReg', checkNotLogin, function(req, res) {

  //生成口令的散列值
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest('base64');

  var newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: password,
  });
  console.log(newUser);
  // 检查用户是否存在
  User.get(newUser.name, function(err, user) {
    if (user)
      err = 'Username already exists.';
    if (err) {
      // req.flash('error', err);
      console.log('error：数据库操作错误或者用户已存在错误');
      return res.redirect('/reg');
    }
    // 如果不存在则新增用户
    // newUser.save(function(err, user) {
    //   if (err) {
    //     // req.flash('error', err);
    //     console.log('error：数据库操作错误');
    //     return res.redirect('/reg');
    //   }
    //   // req.session.user = newUser;
    //   console.log('注册成功');
    //   // req.flash('success', '注册成功');
    //   res.redirect('/');
    // });

    res.redirect('/');
  });

  // setTimeout(function() {
  //   console.log(88);
  //   res.redirect('/');
  // }, 3000);

  // req.session.user = newUser;
  // console.log('注册成功');
  // // req.flash('success', '注册成功');
  // res.redirect('/');
});

router.get('/login', function(req, res) {
  res.render('login', {});
});

router.get('/retrievePwd', function(req, res) {
  res.render('retrievePwd', {});
});

router.post('/doLogin', function(req, res) {
  res.render('doLogin', {});
});

router.get('/logout', function(req, res) {
  res.render('logout', {});
});

router.get('/detail', function(req, res) {
  res.render('detail', {});
});

router.get('/about', function(req, res) {
  res.render('about', {});
});

module.exports = router;

function checkNotLogin(req, res, next) {
  if (req.session.user) {
    // req.flash('error', '已登入');
    console.log('已登录')
    return res.redirect('/');
  }
  next();
}
