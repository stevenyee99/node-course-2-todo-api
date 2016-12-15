const {MongoClient, ObjectId} = require('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to mongo db');
    
    db.collection('Users').findOneAndUpdate({_id: new ObjectId('58490042155a7a2117d88aa5')}, {
        $set: {
            name: 'Steven',
        },
        
        $inc: {
            age: 1
        }
    }, {
        returnOriginal : false
    }).then((res) => {
        console.log(res);
    });
    
    //db.close();
});