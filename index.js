const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

app.get("/", (req, res)=>{
   res.send("I am on the message")
   res.end()
})

app.get("/gallery", (req, res)=>{
    res.send("I am on the gallery")
    res.end()
 })

 app.get("/contact", (req, res)=>{
   res.send(" <h1>I am on the gallery</h1> ")
   res.end()
})

 app.post("/", (req, res)=>{
    res.send("Post worked")
    res.end()
 })

 app.listen(8000, ()=>{
    console.log("Server started")
 })