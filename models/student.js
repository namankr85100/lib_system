const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentBookSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: '----Not available----'
    },
    isbn: {
        type: String,
        minlength: 10,
        maxlength: 13,
        required: true,
        unique: true
    },
    cat: {
        type: String,
        enum: ['Romance','Technology','Computer Science','Management','Electronics','Physics','Chemistry','Mathematics','Fiction','Philosophy','Language','Arts','Other'],
        required: true
    },
    copies: {
        type: Number,
        min: 1,
        max: 1000,
        required: true
    },
    friend: {
        type: String,
        required: true
    },
    issue_type: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});
var Student = mongoose.model('Student',studentBookSchema);

module.exports=Student;