const dotenv =  require('dotenv');
const mongoose =  require('mongoose');
// import bluebird from 'bluebird';

dotenv.config({ path: __dirname + '/../.env' });

// mongoose.Promise = bluebird;

mongoose.connect(`${process.env.DB_CONNECTION}`, {
    keepAlive: true,
    keepAliveInitialDelay: 30000,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.on("error", console.error.bind(console, 'connetion error.'));
db.once('open', function() {
    console.log('conetado')
})

mongoose.Promise = global.Promise;

module.exports = mongoose;
