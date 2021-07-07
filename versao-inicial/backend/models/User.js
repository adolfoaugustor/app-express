import mongoose from '../database/index';

const UsersSchema = new mongoose.Schema({
    // company: { 
    //     type: String,
    //     require: true
    // },
    // employee: {
    //     type: String,
    //     unique: true,
    //     require: true
    // },
    // token: {
    //     type: String,
    //     unique: true,
    //     require: true
    // },
    // lastNotification: {
    //     typpe: Date
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
});

const User = mongoose.model(
    'User', 
    UsersSchema
);

export default module.exports = User;
