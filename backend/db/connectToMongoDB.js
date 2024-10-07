import mongoose from "mongoose";
const connectToMongoDB = async () => {
    try{
        // await mongoose.connect(process.env.MONGO_DB_URI);
        // console.log("Connected to MongoDB");
        console.log("Connecting to MongoDB with URI:", process.env.MONGO_DB_URI); // Log the URI
        await mongoose.connect(process.env.MONGO_DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.log("Error connecting to MongoDB",error.message);
    }
};

export default connectToMongoDB;