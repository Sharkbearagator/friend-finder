var friends = require("../data/friends");
module.exports = function (app) {

app.get("/api/friends", function(req,res){
return res.json(friends);
});

app.post("/api/friends", function(req,res){
    console.log(req.body)
    
    var userResponses = req.body.scores;
		console.log('userResponses = ' + userResponses);

		
		var matchName = '';
		var matchImage = '';
        var totalDifference = 10000; 
        
		for (var i = 0; i < friends.length; i++) {
			console.log('friend = ' + JSON.stringify(friends[i]));

			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			 console.log('diff = ' + diff);

			if (diff < totalDifference) {
				console.log('Closest match found = ' + diff);
				console.log('Friend name = ' + friends[i].name);
				console.log('Friend image = ' + friends[i].photo);

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}


		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};
