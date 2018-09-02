const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
app.get('/xml', (req, res) => {
  fs.readFile(__dirname + '/foo.xml', function(err, data) {
      parser.parseString(data, function (err, result) {
          console.dir(result);
          json = JSON.stringify(result)
          console.log(json);
          var obj = JSON.parse(json);
          console.log(obj);
          console.log('Done');
          res.send(obj);
      });
  });
});
app.get('/posts', (req, res) => {
  res.send(
    [
      {
        title: "Hello World!",
        description: "Hi there! How are you?"
      },
      {
        title: "Hello World 2!",
        description: "I am good!"
      }
    ]

  )
})
fs.readFile(__dirname + '/../xml/foo.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        json = JSON.stringify(result)
        var obj = JSON.parse(json);
        // console.log(result.CATALOG);
        console.log(result.CATALOG.PLANT.length);
        for(var i = 0; i < result.CATALOG.PLANT.length; i++){
          if(result.CATALOG.PLANT[i].COMMON == "Primrose"){
            console.log(result.CATALOG.PLANT[i].COMMON);
          }
        }
        console.log('Done');
    });
});

app.listen(process.env.PORT || 8081)
