var notes = require('./../controllers/users.js');
var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var path = require('path');


module.exports = function(app){

    app.post('/notes', function(req, res){
        // console.log('in notes we can write to database', req.body.text);  
        notes.create(req, res);
        
    })

    app.get(app.get('/addLike/:id', function(req, res){
        console.log('in add like', req.params.id);
        Answer.findOne({_id: req.params.id}, function(err, answer){
            if (err){
                console.log(err);
            } else {

                answer.likes++;
                answer.save(function(err){
                    if(err) { console.log(err); } 
                    else { 
                        console.log('saved answer like!')
                        res.json(answer);
                    }
                });
            }
        })
    }));

    app.post('/new_question', function(req, res){
        var question = new Question();
        question.question = req.body.question;
        question.description = req.body.description;
        console.log('add question', question);
        question.save(function(err, result){
            if (err){
                console.log(err); 
            } else {
                console.log('success!');
                res.json(result);
            }
        });
    })

    app.post('/addinganswer',  function(req, res){
        console.log('am I here?');
        console.log('in server for adding answer', req.body );
        console.log(req.body.data.q_id);

        Question.findOne({_id: req.body.data.q_id}, function(err, question){
            var answer = new Answer()
            console.log('the question so far found', question);
        
            answer.answer = req.body.data.answer;
            console.log('the answer is ', req.body.data.answer)
            answer.details = req.body.data.details;
            answer.likes = 0;
            answer.author = req.body.data.author;
            console.log('saving answer', answer)
            answer.save(function(err){
                if (err){
                    console.log(err);
                } else {
                
                    console.log('saving answer after saving', answer);
                    question.answers.push(answer);
                    question.save(function(err){
                        if(err) { console.log(err); } 
                        else { 
                            console.log('saved answer!')
                
                        }
                    });
                }
            });

        });
    });

    app.get('/questions', function(req, res){
        console.log('get all questions-server');
        console.log('in notes we can write to database', req.body.text);  
        Question.find({},function(err, result){
            if (err){
                console.log(err); 
            } else {
                res.json(result);
            }
        }); 
        // Question.find({})
        // .populate('answers')
        // .exec(function(err, question) {
        //      res.json(question);
        // });
        
    })


    app.get('/allanswers/:id', function (req, res){
        console.log('in server for all answers', req.params.id);
        Question.findOne({_id: req.params.id})
        .populate('answers')
        .exec(function(err, question) {
             res.json(question)
        });
    });
    

    app.get('/notes', function(req, res){
        // console.log('in notes we can write to database', req.body.text);  
        notes.index(req, res);
        
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}