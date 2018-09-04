var express = require('express')
var postsRouter = express.Router()

postsRouter.get('/', (req,res)=>{
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


  module.exports = postsRouter
