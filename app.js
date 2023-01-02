const express=require('express');
const app = express();
const mongoose = require('mongoose');


const port = 8080;

const auth = require('./Middleware/auth');
const dburl = require('./secret/secret.json')

app.use(express.json());

app.use('/auth', auth);
app.post('/test', (req, res, next) =>{
    console.log('test request')
    res.json({message : "test success"});
})
mongoose.connect(dburl.dburl, {dbName: "Clon"})
.then(() =>{
    app.listen(port);
    console.log('DB Connected Successful')
})
.catch(err =>{
    console.log(err);
})