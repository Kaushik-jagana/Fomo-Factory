import express from 'express';
import connectDB from './utils/db';
import dataRoutes from './routes/dataRoutes';
import { pollData } from './services/dataService';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/prices', dataRoutes);

// Poll data every 5 seconds
setInterval(pollData, 5000);

export default app;
