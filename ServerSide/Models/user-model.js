const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

// Remove the pre-save middleware for hashing the password
// userSchema.pre('save', async function(next){
//     console.log("pre method", this);
//     const user = this;
//     if (!user.isModified('password')) {
//         next();
//     }
//     try {
//         const saltRound = await bcrypt.genSalt(10);
//         const hash_password = await bcrypt.hash(user.password, saltRound);
//         user.password = hash_password;
//     } catch (error) {
//         next(error);
//     }
// });

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this.id.toString(),
            username: this.username,
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30Days",
        });
    } catch (error) {
        console.error(error);
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;
