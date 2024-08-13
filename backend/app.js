var express = require("express");
var server = express();
var cors = require('cors');
var mongoose = require("mongoose");
var movieRoutes = require('./routes/movie.js');
mongoose.connect(
"mongodb+srv://seifeldin:Sx4ykooNtft8davP@cluster0.nylt8ei.mongodb.net/moviesapp?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>{
    console.log("Connected successfully");
}).catch((err)=>{
    console.log("Failed to connect");
})



server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

server.use('/movie',movieRoutes);



server.listen(3003, () => {
    console.log("Server Connected");
  });
