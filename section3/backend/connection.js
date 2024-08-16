const mongoose = require("mongoose")

const url = "mongodb+srv://ashraf:Mohdhshs@cluster0.pkhfd.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0"

// connect to the database
 // asynchronous - return a promise
mongoose.connect(url)
.then(() => {
console.log("connect to database");

})
.catch((err) => {
console.log(err);

})

module.exports = mongoose;