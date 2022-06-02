const ZingMp3 = require("zingmp3-api-full")
const router = require('express').Router()

router.get('/gethome', (req,res) => {
	ZingMp3.getHome("1").then((data) => {
		return res.json(data)
	})
})

router.get('/search/:params', (req,res) => {
	const params = req.params
	ZingMp3.search(params.params).then((data) => {
	  res.json(data)
	})
})

router.get('/song/:id', (req,res) => {
	ZingMp3.getSong(req.params.id).then((data) => {
	  return res.json(data)
	})
})

module.exports = router