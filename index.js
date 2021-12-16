const express=require('express')
const connectToMongo=require('./db.js')
const page=require('./routes/pages')
const app=express()

app.set("view engine",'ejs')
app.use(express.static('public'))
app.use('/',page)

connectToMongo()
app.listen(3000,()=>{
    console.log("Server is running at ",3000)
})
