
var newFriend = require('../data/friends.js');
var path 	= require('path');


//display JSON of all possible friends 
module.exports = function(app){

	app.get("/api/:friends?", function(req, res){
	 res.json(newFriend)
	
});

// app.post("/api/friends", function(req, res){

// //handle incoming survey results 

// 	var addFriend = req.body;
// 	var friendName = addFriend.name.replace(/\s+/g, "").toLowerCase();
// 	var friendImg = addFriend.picture;
// 	var friendScores = addFriend.scores;

// //handle compatibility logic 	
// var totalDifference = 0

// 	var youMatched ={
// 		name: "",
// 		picture: "",
// 		matchDifference: 0
// 	}

// 	for(var i = 0; i < [newFriend].length-1; i++){
// 			console.log(newFriend[i].name);
// 			totalDifference = 0;

// 			for(var a = 0; a < 10; a++){
				
// 				totalDifference += Math.abs(parseInt(friendScores[a]) - parseInt(newFriend[i].scores[a]));
				
// 				if (totalDifference <= youMatched.friendDifference){

					 
// 					youMatched.name = newFriend[i].name;
// 					youMatched.photo = newFriend[i].photo;
// 					youMatched.matchDifference = totalDifference;
// 				}
// 			}
// 		}
// 	//user's results will be in an array
// 		newFriend.push(addFriend);	

// 		res.json(youMatched);

// })

app.post("/api/friends", function(req, res){
	var newFriendscores = req.body.scores;
	var scores =[];
	var friendCount = 0;
	var bestMatch = 0; 

	for(var i =0; i<newFriend.length; i++){
		var scoresDiff = 0;

		//compare friends 
	for(var a = 0; a<newFriendscores.length; a++){
		scoresDiff += (Math.abs(parseInt(newFriend[i].scores[a])- parseInt(newFriendscores[a])));
	}

	//push results to scores
	scores.push(scoresDiff);
	}
	//find best match
	for(var i = 0; i<scores.length; i++){
		if(scores[i] <= scores[bestMatch]){
			bestMatch = i;
		}
	}

//return data for best match
var newMatch = newFriend[bestMatch];
res.json(bff);
	//show bestmatches

	newFriend.push(req.body);
})
}

