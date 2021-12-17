const express=require('express')
const bodyParser = require('body-parser');
const connectToMongo=require('./db.js')
const page=require('./routes/pages')

const user=require('./routes/user')
const app=express()
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine",'ejs')
app.use(express.json())

app.use(express.static('public'))
app.use('/',page)
app.use('/',user)

connectToMongo()
app.listen(3000,()=>{
    console.log("Server is running at ",3000)
})
