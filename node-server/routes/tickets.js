var express = require('express');

const cors = require('cors');
var router = express.Router();
const https = require('https');
var getJSON =require('get-json');
const app = express();
var location_url = 'https://api.omnivore.io/1.0/locations/i57z4qMT/tickets?api_key=fa1541435e6c4f82a1a6dccd86bc43a2';


	/* GET users listing. */
	router.get('/', function(req, res, next) {
		
		
		
				
	  
			
				https.get(location_url, (resp) => {
					
					
					
				let data = '';
				
				
				
				
				
				console.log(resp.headers);
				
				// A chunk of data has been recieved.
				resp.on('data', (chunk) => {
					data += chunk;
				});
				
				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					
					 getJSON(location_url, function(err, response){
					if(err)
					{
					   console.log(err);
					}
					else
					{
					   res.setHeader('content-type', 'application/json');
					   res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
					   //res.send(JSON.stringify({json: data}));
					  // res.send(JSON.stringify(data));
					  res.send(data);
					}
				  });
					
					
					
				  // console.log(JSON.stringify(data));
				});
				
				}).on("error", (err) => {
				   
				console.log("Error: " + err.message);
				});
			
	  
});

module.exports = router;
