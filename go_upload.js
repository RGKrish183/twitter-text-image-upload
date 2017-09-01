/*
*		Author : Gopala Krishnan R (c) rgkrish183@gmail.com
*		Date :	2017-09-01
*		Package	:	Twitter Images Uploading	
*/


	var express = require("express");
	var mysql = require("mysql");
	var bodyparser = require("body-parser");
	var app = express();

	app.use(express.static('public'));
	app.use(bodyparser.urlencoded({extended: true}));
	app.use(bodyparser.json());

	var port = 1818;

	var commonoutput = {"status":"failed", "output":"no records found!!!"};


	//http://localhost:1818/goupload

	app.get('/goupload', function (req, res) {

		var request = require('request')
		var fs = require('fs')
		var path = require('path')

		var oauth = { 
		consumer_key: "cGmxQROE8QQhVcU23pXY4gvX2", 
		consumer_secret: "5b6f0d0af968e249c0a8fe1e4dc0ee65d63ee77a760ee90aa4f2d56a26b9b614", 
		token: "987654321-28432af476099659a12747e6ccd458d491f4ac3f7bce630d1831228e", 
		token_secret: "28432af476099659a12747e6ccd458d491f4ac3f7bce630d1831228e"
		}

		var url = "https://api.twitter.com/1.1/statuses/update_with_media.json"

		var r = request.post({url : url, oauth : oauth})
		var form = r.form()
		form.append('status', 'Gopala Krishnan Twitter Image uploading solution using node js')

		//Local Image path like D:\xampp\htdocs\node_coder\adjustable_spanners.png
		form.append('media[]', fs.createReadStream(path.join(__dirname, 'adjustable_spanners.png')))

		r.on('data', function(data){
		console.log(data.toString())
		});
	});

	var server = app.listen(port, function(){
		console.log("Upload data:"+server.address().port);
	});

