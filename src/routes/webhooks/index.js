module.exports = (express) => {

	const router = express.Router();

	router.get('/status', (req, res) => {
		res.status(200).json({
			output: 'Webhooks'
		});
	});

	router.post('/dump', (req, res) => {
		
		console.log('Dumping to stdOut', req.body);
		
		res.json({ thanks:true });
	});

	return router;
}