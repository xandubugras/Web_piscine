var UtmpParser = require('utmp');

var p = new UtmpParser('/var/log/wtmp');

p.on('data', function(d) {
  console.log("got record:", d);
})

p.run();
