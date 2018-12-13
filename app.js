const express = require('express')
const app = express()
const port = 3000
var fs=require('fs');
const request = require('request');


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"webtest"
});
var stmt1="SELECT * FROM post INNER JOIN comments ON post.id=comments.post_id";
var stmt="SELECT * FROM post";


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query(stmt, function (err, result) {
    if (err) throw err;
    console.log( result);
  });

});


app.use(express.static('public'))
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


		app.get('/post',(req,res)=>{
		 con.query(stmt, function (err, result) {
		    if (err) throw err;
		    console.log( result);
		    res.send(result);
		  });


		})




	/*fs.readFile('DATA.txt','utf8',function(err,contents){

		console.log(contents);
	});*/

/*
console.log('after calling readFile');

 app.get('/readFile',(req,res)=>{ 
 	fs.readFile('DATA.txt','utf8',function(err,contents){ 
 		res.send(contents);
 	});
 }); 



 app.get('/serverRead',(req,resp)=>{

 	 request('https://jsonplaceholder.typicode.com/todos/', { json: true }, (err, res, body) => {
		  if (err) { return console.log(err); }
		  
		  console.log(body.url);
		  console.log(body.explanation);
		 resp.send(body);
	});
 });
 	
*/






