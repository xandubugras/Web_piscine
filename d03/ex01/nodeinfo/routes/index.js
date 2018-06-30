var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')

/* GET home page. */
//router.use((res, req) => console.log(res))

router.use(cookieParser());

router.get('/', function(req, res, next) {
  res.cookie("myFirstCookie", "this cookie is cool");  
  res.render('index', { title: 'Express' });
});

router.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next();
}, function (req, res) {
  var xxt= "sapeca";
  res.send(xxt);
})

router.get('/users/', function (req, res) {
  res.render('vars', { title: req.query})
})

router.get('/cookies/', function (req, res) {
  res.render('vars', { title: req.query})
  handleCookies(req, res);
  res.end()
})

function handleCookies (req, res) {
    console.log(req.query);
    var action = req.query.action;
    var name = req.query.name;
    var value = req.query.value;
    if (action == 0)
        return ;
    if (action == "set") {
        res.cookie(name, value);
    } else if (action == "get")
    {
        console.log(req.cookies);
    }
}

module.exports = router;
