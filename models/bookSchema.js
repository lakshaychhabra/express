var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var book = new Schema({

	book_details:{
	name : String,
	author : String,
    bookId:Number,
    Edition:Number 
                 },
    book_status :{
    dateOfIssue : String,
	issuedTo : Number
            }
});
var bookInfo = mongoose.model('book',book);
module.exports = bookInfo;