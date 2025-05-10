import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/todolist', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log('MongoDB connecté');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB', err);
    process.exit(1);
  }
};

export default connectDB;
