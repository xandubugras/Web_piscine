
var cookieParser = require('cookie-parser');
module.exports = {
   handleCookies: function (req, res) {
       console.log(req.query);
       res.cookie("myFirstCookie", "this cookie is cool");
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
}