var express = require('express');
const cors = require('cors');
var router = express.Router();
const https = require('https');
var getJSON =require('get-json');
var check =false;
const app = express();



// Display list of all Locations.
exports.location_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Locations list');
};

// Display list of all Locations.
exports.get_all_locations = function(req, res) {
    res.send('NOT IMPLEMENTED: Locations list idddddddd'+ req.params.id);
};


// Display list of all Locations.
exports.index = function(req, res) {
    res.send('Please Enter API Keys to connect with omivores services');
};


// check api key of all Omnivores.
exports.auth = function(req, res) {
	var auth_url = 'https://api.omnivore.io/1.0/?api_key=';
	auth_url=auth_url + req.params.id;
	https.get(auth_url, (resp) => {
				let data = '';
				res.setHeader('content-type', 'application/json');
					   res.setHeader('Access-Control-Allow-Origin','http://localhost:4200/auth');
				console.log(auth_url);
				console.log(resp.headers);
				
				// A chunk of data has been recieved.
				resp.on('data', (chunk) => {
					data += chunk;
				});
				
				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					
					 getJSON(auth_url, function(err, response){
					if(err)
					{
						
					   console.log(err);
					    res.send('Please Enter Valid Api Key Thanks or connect this example@admin.com');
						check=false;
					}
					else
					{
					   res.setHeader('content-type', 'application/json');
					   res.setHeader('Access-Control-Allow-Origin','http://localhost:4200/auth');
					   //res.send(JSON.stringify({json: data}));
					  // res.send(JSON.stringify(data));
					  res.send(data);
					  check=true;
					  
					}
				  });
					
				
					
				  // console.log(JSON.stringify(data));
				});
				
				}).on("error", (err) => {
					 check=false;
				   
				console.log("Error: " + err.message);
				 res.send('Please Enter Valid Api Key Thanks or connect this example@admin.com');
				});
				
				
	
};

