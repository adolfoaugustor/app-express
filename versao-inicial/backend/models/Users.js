const mongoose = require('../config/mongodb');

const UsersSchema = new mongoose.Schema({
    name: { 
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    admin: {
        type: Boolean,
        default: false

    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Users = mongoose.model(
    'Users', 
    UsersSchema
);

module.exports = Users;
