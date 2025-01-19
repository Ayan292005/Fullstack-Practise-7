import { Schema,model } from "mongoose";

const firstModel= new Schema({
    image:String,
    name:String
})

export const musicModel=model("music",firstModel)