const port = 7777;
const app = require('express')();

app.get('/results', function (req, res) {
  res.send('hello');
});

require('http').createServer(app).listen(port,function(){
  console.log('server is running, on port', port)
});
