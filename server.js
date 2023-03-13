//dependencies
const port = 3000;
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const methodOverride = require('method-override')
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))

//seeding data

//index get

//create get

//show get

//edit get


app.get('/', (req, res) => {
    res.render('index.ejs')
})
//listener
mongoose.connect('mongodb://localhost:27017/bakedgoods').then( () => {
  console.log('The connection with mongod is established')
})
app.listen(port, () => {
  console.log(`Budget app listening on port ${port}`)
});