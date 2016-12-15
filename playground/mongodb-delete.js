const {MongoClient, ObjectId} = require('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to mongo db');
    
    //deleteMany
//    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
//        console.log(res);
//    });
    
    //deleteOne
//    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
//        console.log(res);
//    });
    
    //findOneAndDelete
//    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//        console.log(result);
//    })
    
    
    db.collection('Users').findOneAndDelete({_id: new ObjectId('58490048dbbe482118d6846a')}).then((res) => {
        console.log(res);
    })

    
    
    //db.close();
});