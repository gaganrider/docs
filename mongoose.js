
// npm i mongoose
// make folder models
// create file db.js and userModel.js



// write in db.js
// import
const mongoose =require ('mongoose')

// CONNECT TO DATABASE

mongoose.connect("mongodb://localhost:27017/databasename")//if it finds the database then it will connects with it otherwise it will create it 
//path should be a string you can find it on mongodbcompass or mongodb atles
.then(()=>console.log('mongooseconnected'))// confirms that the database is connected
.catch((err)=>console.log(err))//throws error if any


//write in app.js 


require('./models/db');// replace the path where the database is created

// now you can see 'mongooseconnected' in console




//CREATING SCHEMA in usermodel.js

// import
const mongoose =require ('mongoose');

// creating Schema
// schema is a formate in which we want out data to be saved

const userSchema =new mongoose.Schema({
    name:{
        type:String, //type of input
        required:true,//to make it a mendetory field
        unique:true,//to make sure the value is unique and not get repeted like email phone number etc
        trim:true,// to trim the spaces from the values
        default:"defaultvalue"// to set the default value 
    }
})

// export schema creating model
const User = mongoose.model("User",userSchema) //try to keep it in CAPS and in singuler form (do not put s in the end)

module.exports = User;






//write in index.js
// importing usermodel 
const User = require('../models/userModel')//replace path with actual path
//crud operations for mongoose

// CREATING THE DATA 

const user = new User();
student.name=req.body.name;
student.username=req.body.username
student.save()

// orrrrrr

User.create(data)// data should be an object


//orrr
//when using passport local create stretagy
const {name ,username,email,password}=req.body;
User.register({ name, username, email, }, password)

//GETTING THE DATA



//getting all of the data

const data = User.find()// //will find all the data present in our database
 //data will be an array having our data

// getting the data by its unique id

const data = User.findById(userid)// //will find the data having the given id 
//since the id is going to unique the data will be an object having our data


// getting the data with a different field 

const data = User.findOne({name:'gagan'})// //will find the first data with name gagan
 //data will be an object having our data


const data = User.find({name:'gagan'})// //will find all the data with name gagan, leave it empty to get all the data
 //data will be an array having our data

 




// UPDATING THE DATA

//updating data using unique id

const data=User.findByIdAndUpdate(userid, //will find the data with given id in the database 
    {name:"Anuj"}// will update the name to anuj 
    );
// data will hold the updated data


//updating data using other parameter

const data=User.findOneAndUpdate({username: "john" }, //will find the data with username john in the database you can change the value or finding perameter 
    {name:"Anuj"}// will update the name to anuj 
    );
// data will hold the updated data




// DELETING THE DATA
User.findOneAndDelete({_id:"given id"})//will find by the id and delete it. (use req.user.id or req.body.id)
