

var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var comments = [{
		name: '张三',
		message: '今天儿不错！',
		dateTime: '2015-10-16'
	},
	{
		name: '张三2',
		message: '今天儿不错！',
		dateTime: '2015-10-16'
	},
	{
		name: '张三3',
		message: '今天儿不错！',
		dateTime: '2015-10-16'
	},
	{
		name: '张三4',
		message: '今天儿不错！',
		dateTime: '2015-10-16'
	},
	{
		name: '张三5',
		message: '今天儿不错！',
		dateTime: '2015-10-16'
	}
]
app.get('/', function (req, res) {
	res.render('index.html', {
		comments: comments
	})
})

app.get('/post', function (req, res) {
	res.render('post.html')
})

app.post('/post', function (req, res) {
	var comment = req.body
	comment.dateTime = '2017-11-5 10:58:51'
	comments.unshift(comment)

	res.redirect('/')
})

app.listen(3000, function () {
	console.log('app is running at port 3000.')
})