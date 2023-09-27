var mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content: { 
        type: String,
        required: true
    },
    category: String,
    imageUrl: String,
    publishedAt:{
        type: Date,
        default: Date.now
    },
    //Additional fields like tags, related articles, etc can be added here
});
mongoose.model('Article',articleSchema);

