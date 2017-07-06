var express = require('express')
var port = 3000||process.env.PORT;
var app = express()
var bodyParser = require('body-parser')
var student = require('./models/studentSchema')
var books = require('./models/bookSchema.js')
var status = require('./models/status')
var mongoose = require('mongoose')
mongoose.connect('mongodb://admin:admin@ds151202.mlab.com:51202/library')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
extended:true
}));
var firstName,lastName,rNumber,pNumber,bIssued;
app.post('/student',function(req,res){
    firstName = req.body.fName;
    lastName = req.body.lName;
    rNumber = req.body.rollNumber;
    pNumber = req.body.phoneNumber;
    bIssued = req.body.booksIssued;
var studentInfo = new student({
       fName : firstName,
	   lName : lastName,
	   phoneNumber: pNumber,
	   rollNumber: rNumber,
	   booksIssued : bIssued
	});
studentInfo.save(function(err,data)
{
	if(err){
		console.log(err)
	}
	else{
		console.log("student data saved")
	}
	res.json(data)
})
            
});
app.post('/book',function(req,res){
    Name = req.body.name;
    Author = req.body.author;
    BookId = req.body.bookId;
    Edition = req.body.edition;

var bookInfo = new books({
       name : Name,
	   author : Author,
	   bookId: BookId,
	   edition: Edition,
	});
bookInfo.save(function(err,data)
{
	if(err){
		console.log(err)
	}
	else{
		console.log("book data saved")
	}
	res.json(data);
})
        
});

app.post('/status',function(req,res){
    DateOfIssue = req.body.dateOfIssue;
    IssuedTo = req.body.issuedTo;
   

var statusInfo = new status({
       dateOfIssue : DateOfIssue,
       issuedTo    : IssuedTo
	   
	});
statusInfo.save(function(err,data)
{
	if(err){
		console.log(err)
	}
	else{
		console.log("status updated")
	}
	res.json(data);
})
        
});


app.listen(port,function() {
	console.log('server is running at 3000')
})
