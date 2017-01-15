const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//Todo.remove({}).then((result) => {
//    console.log(result);
//});
//
//Todo.findOneAndRemove({}).then((result) => {
//    console.log(result);
//});
//
//Todo.findByIdAndRemove().then((result) => {
//    console.log(result);
//});

Todo.findByIdAndRemove('587c0ac150426adb4b002a97').then((todo) => {
    console.log(todo);
});