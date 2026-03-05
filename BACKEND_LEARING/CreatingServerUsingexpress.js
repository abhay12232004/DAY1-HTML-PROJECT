import express from 'express' // import express module
const app = express()   //storing return value of express


app.get('/',function(res,req){
    res.send("welcome")
})
app.listen(3000,()=>{
    console.log("SErver is listening")
})    //to activate the server


