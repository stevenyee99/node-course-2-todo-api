const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc) => {
        res.send(doc)
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req,res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(404).send('not a valid Id');
    }
    Todo.findById(id).then((todo) => {
    if(!todo) {
        return res.status(404).send('');
    } else {
        return res.status(200).send({todo});
    }
    }).catch((e) => res.status(404).send());
});


app.listen(port, () => {
    console.log(`Started on port ${port}.`);
});


module.exports = {app};