import mongoose from 'mongoose';

export async function dbconnection() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection  = mongoose.connection

        connection.on('connected',() => {
            console.log('mongo db connected sucessfully')
        })
        connection.on('error',(error) => {
            console.log('please make sure mongo db is connected' + error)
            process.exit()
        })

    } catch (error) {
        console.log('something went wrong!')
        console.log(error)
    }
}