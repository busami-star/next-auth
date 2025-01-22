import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'please provide your username'],
        unique:true,
    },
    email:{
        type:String,
        required:[true,'please provide email'],
        unique:true
    },
    password:{
        type:string,
        required:[true,'please provide password']
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    forgotPasswordToken:string,
    forgotPasswordTokenExpiry:Date,
    verifyToken:string,
    verifyTokenExpiry:Date,
})

const User = mongoose.models.users || mongoose.model('users',userSchema)

export default User;