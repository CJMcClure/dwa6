module.exports = (express) => {

	const router = express.Router();
	const fs = require('fs');
	const uuid = require('uuid4');

	router.get('/status', (req, res) => {
		res.status(200).json({
			output: 'Webhooks'
		});
	});

	router.post('/dump', (req, res) => {
		
		console.log('Dumping to stdOut', req.body);

		fs.writeFile('./logs/' + uuid() + '.log', JSON.stringify(req.body), (err) => {
			if(err) throw err;
			console.log('Recorded Hook Info to ./Logs');
		});

		res.json({
			hookInfo: req.body
		});
	});

	return router;
}