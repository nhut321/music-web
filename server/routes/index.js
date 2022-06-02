const ZingMp3ApiRouter = require('./ZingApiRouter')

const routes = function(app) {
	app.use('/api/v1/zing', ZingMp3ApiRouter)
	app.use('/', (req,res) => {
		res.send('hello')
	})
}

module.exports = routes