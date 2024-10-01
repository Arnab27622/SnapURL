const mongoose = require('mongoose');
const { createHmac, randomBytes } = require('crypto');
const { createAuthenticationToken } = require('../service/auth.js');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    }
}, {
    timestamps: true,
    versionKey: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

//* Hashing of Password
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    const salt = randomBytes(16).toString('hex');

    const hashedPassword = createHmac('sha256', salt).update(user.password).digest('hex');

    this.salt = salt;
    this.password = hashedPassword;

    next();
});

//* Virtual Fields
userSchema.static('matchPasswordAndGenerateToken', async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error('User Not Found!');

    const hashedPassword = createHmac('sha256', user.salt).update(password).digest('hex');

    if (hashedPassword !== user.password) {
        throw new Error('Incorrect Password')
    }
    return createAuthenticationToken(user);
});

const User = mongoose.model('user', userSchema);

module.exports = User;