const express = require('express')
const { PythonShell } = require("python-shell");
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.end('Hello World!');
});


var py_proc
app.post("/upload", (req, res) => {
  console.log(req)
  const input = req.input

  let options = {
    mode: "text",
    args: ["-i" + req]
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