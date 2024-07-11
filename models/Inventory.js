const mongoose=require("mongoose");
const validator=require("validator");
const bcrypt=require("bcrypt");
const InventorySchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:function(v){
                return v === v.toUpperCase();

            }
        },
        message:props=>`${props.value} is not uppercase`
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate:{
            validator:function(v){
                return /^[a-zA-z1-9]+$/.test(v);
            },
            message:props=>`${props.value} must not be there`
        }
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate:{
            validator:function(v){
                return validator.isEmail(v);
            },
            message:props=>`${props.value} is not an email`
        }
    },
    password:{
        type:String,
        require:true,
        trim:true,
    },
    kits:{
        type:Number,
        required:true,
        trim:true,
    },
    football:{
        type:Number,
        required:true,
        trim:true,
    },
    Players:{
        type:Number,
        required:true,
        trim:true,

    }
})

const InventoryModel=mongoose.model("InventoryDb",InventorySchema);
module.exports=InventoryModel;