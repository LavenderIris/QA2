var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var path = require('path');

module.exports = {
    index: function(req, res){
        Note.find({}, function(err, results){
            if (err){
                console.log(err);
            } else {
                console.log('from server', results);
                res.json({results: results});
                // res.sendFile(path.resolve("./client/dist/index.html"))
            }
        })
    },

    create: function(req, res){
        var note = new Note();
        note.content = req.body.text;
        note.save(function(err, res){
            if (err){
                console.log(err); 
            } else {
                console.log('success');
                return res;
            }
        });
    }


}