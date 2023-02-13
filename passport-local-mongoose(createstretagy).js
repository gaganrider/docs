// npm i passport (required for every stretagy)

// student is the name of our model replace it with yours

//for passport local mongoose (createstretagy)

// npm i passport-local passport-local-mongoose


//write in usermodel(js file where schema has to be created)
const plm=require('passport-local-mongoose')//import after importing the mongoose

//under the completion of schema above const User = mongoose.model("User",userModel)
studentSchema.plugin(plm,{usernameField:'email'})// username filed email for login with email write plm only if want to use username for login


//write in app.js
const passport=require('passport')//importing passport
const Student = require('path')//replace path with actual path
const session =require ('express-session')

// line number 21 under express static
app.use(session({
    secrate:"dhoommachale",
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(Student.serializeUser())
passport.deserializeUser(Student.deserializeUser());


// write in index.js
const passport=require('passport')//importing passport
const Student = require('path')//importing our schema rreplace path with actual path
const Router  = require('express')



// at the top after the imports obviously
passport.use(Student.createStrategy());


// signup route
Router.post('/signup',(req,res)=>{
    const {name ,username,emai,password}=req.body; //getting these details from the frontend
    Student.register({ name, username, mother, father, email, classs }, password)//registering our user in the database (writing the password saprately for salting hashing)(use then and catch as per your requirment)
})



// signin route
Router.post('/signin',passport.authenticate('local',{
    successRedirect:'/succes-route',//user will get redirected to the succes route after getting authenticated
    failureRedirect:'/faliure-route',//user will get redirected to the faliure route if authentication falied
})
)




// preventing unautherised access

// creating function
function isLoggedin(req,res,next){
    if (req.isAuthenticated()){
      return next()
    }else{res.redirect('/')}}

// using the function
router.get("/home",isLoggedin, function (req, res, next) {// put isloggedin in your route
        res.render("home")// ther user wil get in only if logged in otherwise gets redirected to '/'
    });   

    // when logged in req.user will have all the user imformation


    // signout route
    router.get("/signout",isLoggedin, function (req, res, next) {
        req.logout(()=>{
            res.redirect("/signin")
        })
    }); // the user will get redirected to signin route after logging out you can change the path if you want







    // reset password 
    router.post("/reset",isLoggedin, function (req, res, next) {
        Student.findById(req.user._id)
        .then((user)=>{
          user.changePassword(
        req.body.oldpassword,req.body.newpassword,(err)=>{ 
        if(err){
        return
        res.send(err)
        }else{
        res.redirect('/signout')
         }})
        })
      });
