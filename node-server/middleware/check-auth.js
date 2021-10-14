var express = require('express');
const cors = require('cors');
var router = express.Router();
const https = require('https');
var getJSON =require('get-json');
var check =false;
const app = express();
var api_key='';
var locationID='';
var auth_url = 'https://api.omnivore.io/1.0/?api_key=';

module.exports = (req, res, next) => {
    try {
		auth_url=auth_url + req.params.id;
		api_key=req.params.id;
		locationID=req.params.locationID;
		if(req.params.id=='locations' || req.params.id=='tickets'  || req.params.id=='menu'  || req.params.id=='categories' || req.params.id==''  || req.params.id=='auth' )
		{
			 return res.status(401).json({
				message: 'Auth failed Please Provide Your Omnivores API KEY'
			});
			
		}else
		{
			
			console.log(req.params);
			console.log('-------------------------------------------------------------------------------------');
			next();
		}
		
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};