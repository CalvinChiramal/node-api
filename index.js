const express = require('express')
const bodyParser = require('body-parser');
const { PythonShell } = require("python-shell");
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({type: "*/*"}))

app.get('/', (req, res) => {
  res.end('Hello World!');
});


var py_proc
app.post("/upload", (req, res) => {
  let body = ''
  req.on('data', function(data) {
    body += data;
  });
  console.log(body)
  
  input="hello.txt"

  let options = {
    mode: "text",
    args: ["-i" + input]
  }
  var pyshell = new PythonShell('hello.py', options)

  pyshell.on('message', function (message) {
    console.log(message);
  })

  pyshell.end(function (err) {
    if (err)
        console.log(err);
  })
  
  py_proc = pyshell.childProcess

});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });