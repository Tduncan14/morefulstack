import mongoose from "mongoose"


export const connectDB = async () => {




    try {
        await mongoose.connect(process.env.MONGODB_URI)

        console.log(
            "database is connected"
        )
    }

    catch (err) {
        console.log(err, 'this is the error')
        process.exit(1)
    }


    // mongodb+srv://treek:<db_password>@cluster0.zee7avz.mongodb.net/?appName=Cluster0

}