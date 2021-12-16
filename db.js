const mongoose=require('mongoose')
const connectToMongo=()=>{
    const URI='mongodb+srv://Sourav:SouravIndia@cluster0.muelr.mongodb.net/Soccer?retryWrites=true&w=majority'
    mongoose.connect(URI, {
    
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err =>{
        if(err) throw err;
        console.log(('Connected to MongoDB'))
    })
}

module.exports=connectToMongo