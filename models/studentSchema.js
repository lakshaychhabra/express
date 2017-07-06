var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var student = new Schema({

	fName : String,
	lName : String,
	phoneNumber:Number,
	rollNumber:Number,
	booksIssued : String
});
var studentInfo = mongoose.model('student',student);
module.exports = studentInfo;