const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true
}).then(()=>{
    console.log("Connection successful");
}).catch((e) => {
    console.log("No connection" + e);
})