import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const connectionString = `${process.env.MONGODB_URL}/${process.env.DB_NAME}`;
    await mongoose.connect(connectionString);
    console.log(`Connected to MongoDB:${connectionString}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;
