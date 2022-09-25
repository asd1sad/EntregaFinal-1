var admin = require("firebase-admin");

var serviceAccount = require("./firebasePoll.json");

const connectDB = () => {
  try {
     admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    console.log('Firebase connected');
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB