var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles =
{
    var articleOne : {
    title: 'Article one',
    heading: 'Article one',
    date: 'sep 5',
    content:`<p>
                Hi I am Akhil.
            </p>
            <p>
                How are you?
            </p>
            <p>
                Keep smiling.
            </p>`
    },
    var articleTwo : {
        title: 'Article 2',
        heading: 'Article 2',
        date: 'sep 5',
        content:`<p>
                    Hi I am Akhil.
                </p>
                <p>
                    How are you?
                </p>
                <p>
                    Keep smiling.
                </p>`
    },
    var articleThree : {
        title: 'Article 3',
        heading: 'Article 3',
        date: 'sep 5',
        content:`<p>
                    Hi I am Akhil.
                </p>
                <p>
                    How are you?
                </p>
                <p>
                    Keep smiling.
                </p>`
    }
    
};
function createTemp(data)
{
 var title = data.title;
 var date = data.date;
 var heading = data.heading;
 var content = data.content;
var htmltemp = `<html>
    <title>
       ${title}
    </title>
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div Class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
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
</html>`;
return htmltemp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName', function (req, res) {
  res.send(createTemp(articles[articleName]));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
