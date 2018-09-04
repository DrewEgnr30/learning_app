var express = require('express')

var xmlRouter = express.Router()
var fs = require('fs'),
    xml2js = require('xml2js')

var parser = new xml2js.Parser()
xmlRouter.get('/', (req,res)=>{
    fs.readFile(__dirname + '/../xml/foo.xml', function(err, data) {
        parser.parseString(data, function (err, result) {
          for(var i = 0; i < result.CATALOG.PLANT.length; i++){
            if(result.CATALOG.PLANT[i].COMMON == "Primrose"){
              console.log(result.CATALOG.PLANT[i].COMMON);
              res.send(result.CATALOG.PLANT[i].COMMON);
            }
          }
        })
    })
  })


  module.exports = xmlRouter
