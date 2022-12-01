function insertQuiz(jsonQuiz, callback)
{
	db.collection("quiz").insertOne(jsonQuiz).then(function(res)
	{
		callback(res);
	})
}

module.exports = 
{
	insertQuiz
}
