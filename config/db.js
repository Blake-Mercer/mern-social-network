const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    mongoose.set('useCreateIndex', true);
    console.log('mongoDB connected');
  } catch (err) {
    console.error(err.message);
    // exit process with process
    process.exit(1);
  }
};

module.exports = connectDB;
