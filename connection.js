const mongoose = require('mongoose');

//Connect to the Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/images_app');

mongoose.connection.once('open',()=> {

    console.log('Connection has been made ');

}).on('error',(error)=> {

    console.log('Connection has Error',error);
});

