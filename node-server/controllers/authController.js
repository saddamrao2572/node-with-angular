var express = require('express');
const cors = require('cors');
var router = express.Router();
const https = require('https');
var getJSON =require('get-json');
var check =false;
const app = express();
var api_key='';
var locationID='';
var baseURL = 'https://api.omnivore.io/1.0/';

// var location_url = 'https://api.omnivore.io/1.0/locations/i57z4qMT?limit=20&api_key=fa1541435e6c4f82a1a6dccd86bc43a2';
var location_url=baseURL+'locations?api_key=';
var location_detail_url =baseURL;
var menu_detail_url =baseURL+'locations?api_key=';

// Display list of all Locations.
exports.location_list = function(req, res) {
    
};

// Display list of all Locations.
exports.get_all_locations = function(req, res) {
				//here you can get all location from omnivores server

	console.log(location_url);
	
	api_key=req.params.id;
	
	console.log(location_url);
	https.get(location_url + req.params.id, (resp) => {
				let data = '';
				console.log(location_url);
				console.log(resp.headers);
				
				// A chunk of data has been recieved.
				resp.on('data', (chunk) => {
					data += chunk;
				});
				
				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					
					 getJSON(location_url + req.params.id, function(err, response){
					if(err)
					{
						
					   console.log(err);
					     res.send("Error: " + data);
						check=false;
					}
					else
					{
					  
					  
					   res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
					    res.setHeader('Api_Key',"'"+api_key+"'");
					   //res.send(JSON.stringify({json: data}));
					  // res.send(JSON.stringify(data));
					    console.log('api' +api_key );
					  res.send(data);
					  check=true;
					  
					}
				  });
					
				
					
				  // console.log(JSON.stringify(data));
				});
				
				}).on("error", (err) => {
					 check=false;
				   
				console.log("Error: " + err);
				 res.send("Error: " + data);
				});

};


// Display list of all Locations.
exports.get_all_locations_all = function(req, res) {
				//here you can get all location from omnivores server

				console.log(location_url);
				 	
	api_key=req.params.id;
	
	console.log(location_url);
	https.get(location_url + req.params.id, (resp) => {
				let data = '';
				console.log(location_url);
				console.log(resp.headers);
				
				// A chunk of data has been recieved.
				resp.on('data', (chunk) => {
					data += chunk;
				});
				
				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					
					 getJSON(location_url + req.params.id, function(err, response){
					if(err)
					{
						
					   console.log(err);
					     res.send("Error: " + data);
						check=false;
					}
					else
					{
					   // res.setHeader('content-type', 'application/json');
					  
					   res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
					    res.setHeader('Api_Key',"'"+api_key+"'");
					   //res.send(JSON.stringify({json: data}));
					   //res.send(JSON.stringify(data));
					    console.log('api' +api_key );
					 res.send(data);
					  check=true;
					  
					}
				  });
					
				
					
				  // console.log(JSON.stringify(data));
				});
				
				}).on("error", (err) => {
					 check=false;
				   
				console.log("Error: " + err);
				 res.send("Error: " + data);
				});

};


// Display list of all Locations.
exports.get_location_detail = function(req, res) {
				//here you can get all location from omnivores server
locationID=req.params.locationID;
				console.log(location_url);
				 	location_url=location_url + req.params.id;
	api_key=req.params.id;
	var url=baseURL+'locations/'+locationID+'/?limit=20&api_key='+ req.params.id;
	console.log(url);
	https.get(url, (resp) => {
				let data = '';
				console.log(url);
				console.log(resp.headers);
				
				// A chunk of data has been recieved.
				resp.on('data', (chunk) => {
					data += chunk;
				});
				
				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					
					 getJSON(url, function(err, response){
					if(err)
					{
						
					   console.log(err);
					     res.send("Error: " + data);
						check=false;
					}
					else
					{
					  // res.setHeader('content-type', 'application/json');
					  
					   res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
					    res.setHeader('Api_Key',"'"+api_key+"'");
					   //res.send(JSON.stringify({json: data}));
					  // res.send(JSON.stringify(data));
					    console.log('api' +api_key );
					  res.send(data);
					  check=true;
					  
					}
				  });
					
				
					
				  // console.log(JSON.stringify(data));
				});
				
				}).on("error", (err) => {
					 check=false;
				   
				console.log("Error: " + err);
				 res.send("Error: " + data);
				});

};



// Display list of all Locations.
exports.get_menu_detail = function(req, res) {
				//here you can get all location from omnivores server
locationID=req.params.locationID;
				console.log(location_url);
				 	location_url=location_url + req.params.id;
	api_key=req.params.id;
	var url=baseURL+'locations/'+locationID+'/?limit=20&api_key='+ req.params.id;
	console.log(url);
	https.get(url, (resp) => {
				let data = '';
				console.log(url);
				console.log(resp.headers);
				
				// A chunk of data has been recieved.
				resp.on('data', (chunk) => {
					data += chunk;
				});
				
				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					
					 getJSON(url, function(err, response){
					if(err)
					{
						
					   console.log(err);
					     res.send("Error: " + data);
						check=false;
					}
					else
					{
					  // res.setHeader('content-type', 'application/json');
					  
					   res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
					    res.setHeader('Api_Key',"'"+api_key+"'");
					   //res.send(JSON.stringify({json: data}));
					   //res.send(JSON.stringify(data));
					    console.log('api' +api_key );
					  res.send(data);
					  check=true;
					  
					}
				  });
					
				
					
				  // console.log(JSON.stringify(data));
				});
				
				}).on("error", (err) => {
					 check=false;
				   
				console.log("Error: " + err);
				 res.send("Error: " + data);
				});

};




// Display list of all Locations.
exports.get_all_modifiers = function(req, res) {
				//here you can get all location from omnivores server
locationID=req.params.locationID;
				console.log(location_url);
				 	location_url=location_url + req.params.id;
	api_key=req.params.id;
	var url=baseURL+'locations/'+locationID+'/menu/modifiers/?limit=20&api_key='+ req.params.id;
	console.log(url);
	https.get(url, (resp) => {
				let data = '';
				console.log(url);
				console.log(resp.headers);
				
				// A chunk of data has been recieved.
				resp.on('data', (chunk) => {
					data += chunk;
				});
				
				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					
					 getJSON(url, function(err, response){
					if(err)
					{
						
					   console.log(err);
					     res.send("Error: " + data);
						check=false;
					}
					else
					{
					  // res.setHeader('content-type', 'application/json');
					  
					   res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
					    res.setHeader('Api_Key',"'"+api_key+"'");
					   //res.send(JSON.stringify({json: data}));
					   //res.send(JSON.stringify(data));
					    console.log('api' +api_key );
					  res.send(data);
					  check=true;
					  
					}
				  });
					
				
					
				  // console.log(JSON.stringify(data));
				});
				
				}).on("error", (err) => {
					 check=false;
				   
				console.log("Error: " + err);
				 res.send("Error: " + data);
				});

};



// Display list of all Locations.
exports.get_all_tickets = function(req, res) {
				//here you can get all location from omnivores server
locationID=req.params.locationID;
				console.log(location_url);
				 	location_url=location_url + req.params.id;
	api_key=req.params.id;
	var url=baseURL+'locations/'+locationID+'/tickets?limit=20&api_key='+ req.params.id;
	console.log(url);
	https.get(url, (resp) => {
				let data = '';
				console.log(url);
				console.log(resp.headers);
				
				// A chunk of data has been recieved.
				resp.on('data', (chunk) => {
					data += chunk;
				});
				
				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					
					 getJSON(url, function(err, response){
					if(err)
					{
						
					   console.log(err);
					     res.send("Error: " + data);
						check=false;
					}
					else
					{
					  // res.setHeader('content-type', 'application/json');
					  
					   res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
					    res.setHeader('Api_Key',"'"+api_key+"'");
					   //res.send(JSON.stringify({json: data}));
					   //res.send(JSON.stringify(data));
					    console.log('api' +api_key );
					 res.send(data);
					  check=true;
					  
					}
				  });
					
				
					
				  // console.log(JSON.stringify(data));
				});
				
				}).on("error", (err) => {
					 check=false;
				   
				console.log("Error: " + err);
				 res.send("Error: " + data);
				});

};



// Display list of all Locations.
exports.get_all_menu = function(req, res) {
				//here you can get all location from omnivores server
locationID=req.params.locationID;
				console.log(location_url);
				 	location_url=location_url + req.params.id;
	api_key=req.params.id;
	var url=baseURL+'locations/'+locationID+'/menu/?limit=20&api_key='+ req.params.id;
	console.log(url);
	https.get(url, (resp) => {
				let data = '';
				console.log(url);
				console.log(resp.headers);
				
				// A chunk of data has been recieved.
				resp.on('data', (chunk) => {
					data += chunk;
				});
				
				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					
					 getJSON(url, function(err, response){
					if(err)
					{
						
					   console.log(err);
					     res.send("Error: " + data);
						check=false;
					}
					else
					{
					  // res.setHeader('content-type', 'application/json');
					  
					   res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
					    res.setHeader('Api_Key',"'"+api_key+"'");
					   //res.send(JSON.stringify({json: data}));
					  // res.send(JSON.stringify(data));
					    console.log('api' +api_key );
					  res.send(data);
					  check=true;
					  
					}
				  });
					
				
					
				  // console.log(JSON.stringify(data));
				});
				
				}).on("error", (err) => {
					 check=false;
				   
				console.log("Error: " + err);
				 res.send("Error: " + data);
				});

};



// Display list of all Locations.
exports.get_all_categories = function(req, res) {
				//here you can get all location from omnivores server
locationID=req.params.locationID;
				console.log(location_url);
				 	location_url=location_url + req.params.id;
	api_key=req.params.id;
	var url=baseURL+'locations/'+locationID+'/menu/categories/?limit=20&api_key='+ req.params.id;
	console.log(url);
	https.get(url, (resp) => {
				let data = '';
				console.log(url);
				console.log(resp.headers);
				
				// A chunk of data has been recieved.
				resp.on('data', (chunk) => {
					data += chunk;
				});
				
				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					
					 getJSON(url, function(err, response){
					if(err)
					{
						
					   console.log(err);
					     res.send("Error: " + data);
						check=false;
					}
					else
					{
					   res.setHeader('content-type', 'application/json');
					  
					   res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
					    res.setHeader('Api_Key',"'"+api_key+"'");
					   //res.send(JSON.stringify({json: data}));
					   res.send(JSON.stringify(data));
					    console.log('api' +api_key );
					 // res.send(data);
					  check=true;
					  
					}
				  });
					
				
					
				  // console.log(JSON.stringify(data));
				});
				
				}).on("error", (err) => {
					 check=false;
				   
				console.log("Error: " + err);
				 res.send("Error: " + data);
				});

};



// Display list of all Locations.
exports.get_all_items = function(req, res) {
				//here you can get all location from omnivores server
locationID=req.params.locationID;
				console.log(location_url);
				 	location_url=location_url + req.params.id;
	api_key=req.params.id;
	var url=baseURL+'locations/'+locationID+'/menu/items/?limit=20&api_key='+ req.params.id;
	console.log(url);
	https.get(url, (resp) => {
				let data = '';
				console.log(url);
				console.log(resp.headers);
				
				// A chunk of data has been recieved.
				resp.on('data', (chunk) => {
					data += chunk;
				});
				
				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					
					 getJSON(url, function(err, response){
					if(err)
					{
						
					   console.log(err);
					     res.send("Error: " + data);
						check=false;
					}
					else
					{
					   res.setHeader('content-type', 'application/json');
					  
					   res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
					    res.setHeader('Api_Key',"'"+api_key+"'");
					   //res.send(JSON.stringify({json: data}));
					  // res.send(JSON.stringify(data));
					    console.log('api' +api_key );
					  //res.send(data);
					  check=true;
					  
					}
				  });
					
				
					
				  // console.log(JSON.stringify(data));
				});
				
				}).on("error", (err) => {
					 check=false;
				   
				console.log("Error: " + err);
				 res.send("Error: " + data);
				});

};


// Display list of all Locations.
exports.index = function(req, res) {
    res.send('Please Enter API Keys to connect with omivores services');
};





// check api key of all Omnivores.
exports.auth = function(req, res) {
	var auth_url =null;
	 auth_url = baseURL+'?api_key=';
	
	api_key=req.params.id;
	console.log(auth_url+'api--------------------------------');
	https.get(baseURL+'?api_key='+req.params.id, (resp) => {
				let data = '';
				console.log(auth_url);
				console.log(resp.headers);
				
				// A chunk of data has been recieved.
				resp.on('data', (chunk) => {
					data += chunk;
				});
				
				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					
					 getJSON(baseURL+'?api_key='+req.params.id, function(err, response){
					if(err)
					{
						
					   console.log(err);
					     res.send("Error: " + data);
						check=false;
					}
					else
					{
					   res.setHeader('content-type', 'application/json');
					  
					   res.setHeader('Access-Control-Allow-Origin','*');
					    res.setHeader('Api_Key',"'"+api_key+"'");
					   //res.send(JSON.stringify({json: data}));
					  // res.send(JSON.stringify(data));
					    console.log('api' +api_key );
					  res.send(data);
					  check=true;
					  
					}
				  });
					
				
					
				  // console.log(JSON.stringify(data));
				});
				
				}).on("error", (err) => {
					 check=false;
				   
				console.log("Error: " + err);
				 res.send("Error: " + data);
				});
				
				
	
};


