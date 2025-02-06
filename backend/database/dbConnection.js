import mongoose from "mongoose";
export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbname: "RESTAURANT"
    })
    .then(()=>{
        console.log("connected to database successfully!");
    })
    .catch((err)=>{
        console.log(` Some error occured while connecting to database!: ${err}`);
    });
};