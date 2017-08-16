var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 'article-one' :{
    
    title : 'Article One',
    heading  : 'Currently Reading',
    content : ` <p>
                   The Epic Measures
                </p>
                <p>
                   The Sapiens
                </p>
                <p>
                   Martin Luther King : Bearing the cross
                </p>`
    
           },

 'article-two' :{
    
    title : 'Article Two',
    heading  : 'Finished Books',
    content : ` <p>
                Diary of a young girl
            </p>
            <p>
                Lean In
            </p>
            <p>
               Sita Ramayana
            </p>
            <p>
                Jaya Mahabharatha
            </p>
            <p>
                Originals
            </p>
            <p>
               Steve Jobs
            </p>
            <p>
                Option B
            </p>
            <p>
                The Secrets Of Flight
            </p>
            <p>
              The Leaders Climb
            </p>`
    
           },

 'article-three' :{
    
    title : 'Article Three',
    heading  : 'All Time Favourite',
    content : `  <p>
                Lean In
            </p>
            <p>
                The Diary Of A Young Girl
            </p>
            <p>
                Jaya Mahabharatha
            </p>`
    
             },
};





function createTemplate (data){
    
     var title = data.title;
     var heading = data.heading;
     var content = data.content;
    
     var htmlTemplate = 
    
     `  <html>
        <head>
          <title>
             ${title}
          </title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body>
          <div>
            <a href = "/">Home</a>
          </div>
           <hr/>
          <h3>
            ${heading}
          </h3>
          <div>
            ${content}
          </div>
        </body>
        </html>`;
        
        return htmlTemplate;
    
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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

app.get('/:articleName',function(req,res) {
    //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

/*app.get('/article-two',function(req,res){
 // res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
  res.send(createTemplate(artice_two));
    
});

app.get('/article-three',function(req,res){
  // res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
   res.send(createTemplate(artice_three));
    
});*/


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
