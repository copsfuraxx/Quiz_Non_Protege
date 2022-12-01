var quizModel = require('../models/quiz');

const hello = (req, res) =>
{
	res.send({hello: "coucou"})
}

const receiveQuestion = (req, res) =>
{
	quizModel.insertQuiz(req.body, function(result)
	{
		res.send(result)
	})
}

module.exports =  {
    hello,
    receiveQuestion
};
