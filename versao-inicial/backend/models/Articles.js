import mongoose from '../database/index';

const ArticlesSchema = new mongoose.Schema({
    name: { 
        type: String,
        require: true
    },
    description: {
        type: String,
        unique: true,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    content: {
        type: Boolean,
        require: true

    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    }
});

const Articles = mongoose.model(
    'Articles', 
    ArticlesSchema
);

module.exports = Articles;
