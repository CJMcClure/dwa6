module.exports = (express) => {

	const router = express.Router();

	router.get('/status', (req, res) => {
		res.status(200).json({
			healthy: true,
		});
	});

	router.use('/webhooks/', require('./webhooks')(express));

	return router;
}