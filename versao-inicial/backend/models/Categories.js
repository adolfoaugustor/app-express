import { mongoose } from '../config/mongodb';

const CategoriesSchema = new mongoose.Schema({
    name: { 
        type: String,
        require: true
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    }
});

const Categories = mongoose.model(
    'Categories', 
    CategoriesSchema
);

module.exports = Categories;
