
// npm i mongoose
// make folder models
// create file db.js and userModel.js
// the term Student is our model name and can be changed 


// write in db.js
// import
const mongoose =require ('mongoose')

// connect to database
mongoose.connect("mongodb://localhost:27017/student")// student is the name of the database if it finds it then it will connects with it otherwise it will create it
.then(()=>console.log('mongooseconnected'))// confirms that the database is connected
.catch((err)=>console.log(err))//throws error if any


//creating schema in userModel.js

// import
const mongoose =require ('mongoose');

// creating Schema
// schema is a formate in which we want out data to be saved

const studentSchema =new mongoose.Schema({
    name:{
        type:String, //type of input
        require:true,//to make it require
        unique:true,//to make sure the value is unique and not get repeted like email phone number etc
        trim:true,// to trim the spaces from the values
        default:"defaultvalue"// to set the default value 
    }
})

// export schema creating model
const Student = mongoose.model("Student",studentSchema) //try to keep it in CAPS and in singuler form (do not put s in the end)

module.exports = Student;


//write in app.js 


require('./models/db');// replace the path where the database is created

// now you can see 'mongooseconnected' in console



//write in index.js
// importing usermodel 
const Student = require('../models/userModel')//replace path with actual path
//crud operations for mongoose

// creating the data into database

const student = new Student();
student.name=req.body.name;
student.username=req.body.username
student.save()

//orrr
//when using passport local create stretagy
const {name ,username,email,password}=req.body;
Student.register({ name, username, email, }, password)

//in updation and deletion we have to find the document which is same as reading it the first argument is the filter which finds the data which is id email or username in most cases

//serching or reading data
Student.findOneAndUpdate({username: "john" }, //will find the data with username john in the database you can change the value or finding perameter like id and username(name k jaga id ya username likhdo) leaving the { } empty will show the whole database
     null, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Original Doc : ",docs);
    }
});



// updating the data

Student.findOneAndUpdate({username: "john" }, //will find the data with username john in the database you can change the value or finding perameter like id and username(name k jaga id ya username likhdo)
    {name:"Anuj"}, null, function (err, docs) {// will update the name to anuj docs will contain the details of the user
    if (err){
        console.log(err)
    }
    else{
        console.log("Original Doc : ",docs);
    }
});



// deleting
Student.findOneAndDelete({_id:"given id"},(err, docs)=>{})//will find by the id and delete it. (use req.user.id or req.body.id)
