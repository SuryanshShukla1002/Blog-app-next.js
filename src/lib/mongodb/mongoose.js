import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);
    if (initialized) {
        console.log('Already connected to mongoDb');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'Blogg-app',
        });
        console.log('Connected to mongoDb');
        initialized = true;
    } catch (error) {
        console.log('Error connecting to mongoDb:', error);
    }
};