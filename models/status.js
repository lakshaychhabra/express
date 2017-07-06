var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var bookStatus = new Schema({

	dateOfIssue : String,
	issuedTo : Number
});

var bookStatusInfo = mongoose.model('status',bookStatus); 
module.exports = bookStatusInfo;