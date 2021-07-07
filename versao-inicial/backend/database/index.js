import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: __dirname + '/../../.env' });

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

export default module.exports = mongoose;
