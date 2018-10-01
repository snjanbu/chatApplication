//Set the value to development 
var env= process.env.NODE_ENV || 'development';

//Get the config file
var config=require('./config.json');

//Setting the environment information
var envConfig= config[env];

//Setting the viable environment
Object.keys(envConfig).forEach(key=>{
    process.env[key]=envConfig[key];
}); 