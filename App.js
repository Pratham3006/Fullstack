const express=require("express");
const app=express();
const bcrypt=require("bcrypt");
const bodyParser = require('body-parser');
const port=process.env.PORT||8000;
require("./Database/Item");
const model=require("./models/Inventory");
app.use(express.json());
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("Welcome to the home page");
})
app.listen(port,()=>{
    console.log(`Connected to port ${port}`);
})
app.get("/item",async(req,res)=>{
    try{
        const data=await model.find();
        res.status(201).json(data)
    }
    catch(e){
        console.log(`Failed to recover data due to ${e}`);
    }
});
app.post("/item",async(req,res)=>{
    try{
        const { name, username, email, password, kits, football, Players } = req.body;
        const hashpass=await bcrypt.hash(password,10);
        const data = await new model({
            name,
            username,
            email,
            password: hashpass, // Store hashed password
            kits,
            football,
            Players
        });
        await data.save()
        res.status(201).send(data)
    }
    catch(e){
        console.log(`Failed to recover data due to ${e}`);
    }
})
app.put("/item/:id", async (req, res) => {
    try {
        const update = await model.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!update) {
            return res.status(404).send();
        }
        res.status(200).send(update); // 200 status code for successful update
    } catch (e) {
        console.log(`Failed to update data due to ${e}`); // Update log message
        res.status(500).json({ error: "Failed to update data" });
    }
});

app.delete("/item/:id",async(req,res)=>{
    try{
        const data=await model.findByIdAndDelete(req.params.id)
        if(!update){
            res.status(404).send("Could not find the data");
        }
        res.status(201).send(data)
    }
    catch (e) {
        console.log(`Failed to update data due to ${e}`);
        res.status(500).json({ error: "Failed to update data" });
    }
})
