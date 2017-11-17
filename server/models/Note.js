var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new mongoose.Schema({
    content: {type: String},
    date: { type: Date, default: Date.now }
})


var QuestionSchema = new mongoose.Schema({
    question: {type: String},
    description: {type: String},
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})

var AnswerSchema = new mongoose.Schema({
    _question: {type: Schema.Types.ObjectId, ref: 'Question'},
    author: {type: String},
    answer: {type: String},
    details: {type: String},
    likes: {type: Number}
})

mongoose.model('Question', QuestionSchema);
mongoose.model('Answer', AnswerSchema);

mongoose.model('Note', NoteSchema);