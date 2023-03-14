//dependencies
const port = 3000;
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const methodOverride = require('method-override')
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))

//database
const mentalHealthLog = require('./models/log.js')
const Log = require('./models/logschema.js')

//seed data
// Log.create(mentalHealthLog).then(() => {
//     console.log(mentalHealthLog)
// })

//index get
app.get('/log', (req, res) => {
    Log.find({}).then((log) => {
        res.render('index.ejs', {
            log
        })
    })
})

//create get
app.get('/log/new', (req, res) => {
    res.render('new.ejs')
})

//show get
app.get('/log/:id', (req, res) => {
    Log.findById(req.params.id).then((log) => {
        res.render('show.ejs', {
            log
        })
    })
})

//edit get
app.get('/log/:id/edit', (req, res) => {
    Log.findById(req.params.id).then((log) => {
        res.render('edit.ejs', {
            log
        })
    })
})

//create post
app.post('/log', (req, res) => {
    Log.create(req.body).then(() => {
        res.redirect('/log')
    })
})

//delete 
app.delete('/log/:id', (req, res) => {
    Log.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/log')
    })
})

//update
app.put('/log/:id', (req, res) => {
    Log.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.redirect('/log')
    })
})

//listener
mongoose.connect('mongodb://localhost:27017/bakedgoods').then( () => {
  console.log('The connection with mongod is established')
})
app.listen(port, () => {
  console.log(`Budget app listening on port ${port}`)
});