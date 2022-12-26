const express = require('express');
const notes = require('./data/notes')
const dotenv = require('dotenv')
const app = express();
dotenv.config()

app.set('port', process.env.PORT || 5000) 

app.get('/', (req, res, next) => {
    res.send('<h1>Hello world<h1>');
})

app.get('/api/notes', (req, res, next) => {
    res.json(notes);    //we use res.json because we are just dumping the string and we want to convert it into json for handling purposes
})

app.get('/api/notes/:id', (req, res, next) => {
    // console.log(notes);
    const note = notes.find((n)=>n._id == req.params.id);   //notes.find returns json and hence do not require conversion and we use res.send
    // console.log(req.params)
    res.send(note)
})

app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})