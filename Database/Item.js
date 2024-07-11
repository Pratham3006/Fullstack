const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Inventory",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Database Connected Sucessfully")
}).catch((e)=>{
    console.log(`Error in connection due to ${e}`);
})