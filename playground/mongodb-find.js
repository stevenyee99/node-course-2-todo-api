const {MongoClient, ObjectId} = require('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');
    
//    db.collection('Todos').find({
//        _id: new ObjectId('584a4b25e5459ba5eddd2186')
//    }).toArray().then((docs) => {
//        console.log('todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    });

        db.collection('Users').find({name: 'Steven'}).toArray().then((docs) => {
        console.log('todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    
    
    
    
    //db.close();
});