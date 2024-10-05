const { admin } = require("./config");


const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const idToken = authHeader.split(' ')[2];
    if (idToken==="undefined") {
        return res.status(403).json({ error: 'No token provided' });
    }

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken); 
        req.user = decodedToken;
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(403).json({ error: 'Unauthorized' });
    }
};

module.exports = verifyToken;