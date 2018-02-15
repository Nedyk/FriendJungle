
var myFriends = require('/friends.js')

app.get("/api/:friends?", function(req, res){
	var friends = req.params.friends
	
	if(friends){
		for var i = 0; i<newFriend.length; i++}{
			if(friends === newFriend[i].routeName){
				return res.json(newFriend[i]);
			}
	}
	return res.json(false)
}
return res.json(newFriend)

	//display JSON of all possible friends 
});

app.post("/api/friends", function(req, res){
	var addFriend = req.body;
	addFriend.routeName = addFriend.name.replace(/\s+/g, "").toLowerCase();
	//handle incoming survey results 
	//handle compatibility logic 
	//user's results will be in an array
})