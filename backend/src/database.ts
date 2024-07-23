import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Substitua <DB_URI> pela URI de conexão do MongoDB (local ou Atlas)
    const conn = await mongoose.connect('<mongodb://localhost:27017/anxiety-tracker>', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
