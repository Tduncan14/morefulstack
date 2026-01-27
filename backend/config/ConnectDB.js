import mongoose from "mongoose"


export default connectDB = async () => {


    await mongoose.connect()

    // mongodb+srv://treek:<db_password>@cluster0.zee7avz.mongodb.net/?appName=Cluster0

}