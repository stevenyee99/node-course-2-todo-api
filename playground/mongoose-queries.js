const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id = '58535d5471051c4436239535';
//
//if(!ObjectID.isValid(id)) {
//    console.log('id is not valid');
//}

//Todo.find({
//    _id: id
//}).then((todos) => {
//    console.log('Todos: ', todos);
//});
//
//Todo.findOne({
//    _id: id
//}).then((todo) => {
//    console.log('Todo: ', todo);
//});

//Todo.findById(id).then((todo) => {
//    if(!todo) {
//        return console.log('todo not found');
//    } else {
//        console.log('Todo by Id: ', todo);
//    }
//}).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if(!user)
        console.log('user not found');
    else 
        console.log('user: ', user);
}).catch((e) => console.log(e));