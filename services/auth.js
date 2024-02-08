const JWT = require('jsonwebtoken');
const secret = 'BlazerZ123@#$%^&*()';

function createUserToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role,
        fullName: user.fullName
    };
    const token = JWT.sign( payload , secret, { expiresIn: '24h' });
    return token;
}

function validateToken(token) {
    if(!token) return null;
    const payload = JWT.verify(token, secret);
    return payload;
}

module.exports = {
    createUserToken,
    validateToken
}