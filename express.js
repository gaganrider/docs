// after creating the express application

//index.js

//mainly two types of request is here get and post
//where we write our path in '' starting with a / req means request and res means response 



//Get request
// ===========
//we use get request to send data to the frontend. default request is get request
router.get('/', function(req, res, next) {
    
  });
  
  
  //post request
//   =============
  //we use post request to recive data from the frontend. to make a post request you have to make a form and set method to post or use thunder client
  
  router.post('/', function(req, res, next) {
    ;
  });

  //req or request is basically what is we getting from frontend 
//res or response is what we sending to the frontend , if response is not given then the server will stuck on loading

//in res we have mainly theses operations

res.send('data you want to send')// we use res.send to send any data to the front end
res.json(jsondata)// we use res.json to send json data to the front end

//json data is type in witch we send or recive data bw frontend and backend
//json is basically a object with '' on both sides
//object
{
    name:'gagan',
    age:87
}
//json
{
    'name':'gagan',
    'age':87
}

res.render('index', { title: 'Express' })// we use res.render when we render (show) a ejs file on our frontend (index is ejs file we want to render)


res.redirect('/login')// we use res.redirect when we want to send the user from one page to another page get route of that page is required.


//in req we have these
req.body//we use req.body to recieve the data from the frontend it will return the whole data 
req.body.name//we use request .body.name when we want a perticular data where name is the name of the input tag in html, without the name argument we cannot recive the data from frontend

router.get('/:id', function(req, res, next) {// anything after / will be considerd as id works in both get and post routes
    req.params.id 
});

//to recive the value of id we use req.params.id 