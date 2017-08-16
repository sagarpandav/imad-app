var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    "article-one": {title : 'Article one',
    heading : 'Article one',
    date : '15 Aug 2017',
    content : ` 
                <p>
                    This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one.
                </p>
                <p>
                    This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one.
                </p>
                <p>
                    This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one. This is the Article one.
                </p>`},
    "article-two": {title : 'Article two',
    heading : 'Article two',
    date : '14 Aug 2017',
    content : ` 
                <p>This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article.
            </p>
            <p>This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article.
            </p>
            <p>This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article.
            </p>`},
    "article-three": {title : 'Article three',
    heading : 'Article three',
    date : '13 Aug 2017',
    content : ` 
                <p>This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article.
            </p>
            <p>This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article.
            </p>
            <p>This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article. This is the Article.
            </p>`}
};


function createtemp(data){
    var title = data.title;
    var heading = data.heading;
    var date =  data.date;
    var content = data.content;
    var htmltemp = `
        <html>
        <head>
            <title>${title}</title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class = "container">
                <div>
                    <a href="/">Home</a>
                </div>
                <br>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>    
        </html>
    `;
    return htmltemp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename',function(req,res){
    //articlename =  article-one
    //articles[articlename] = {} content of article name
    var articlename = req.params.articlename; 
   res.send(createtemp(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
