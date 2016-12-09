const {MongoClient, ObjectId} = require('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');
    
//    db.collection('Todos').insertOne({
//        
//    }, (err, result) => {
//        if (err) {
//           return console.log('Unble to insert Todos:', err);
//        }
//        console.log(JSON.stringify(result.ops, undefined, 2));
//    })
 
    
//    
//    db.collection('Users').insertOne({
//        name: 'Steven',
//        age: 25,
//        location: 'Seattle'
//    }, (err, result) => {
//       if (err)
//           return console.log('Failed to record to users', err);
//        console.log(result.ops[0]._id.getTimestamp());
//    });
    
    db.close();
});