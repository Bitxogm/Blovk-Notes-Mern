import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT= process.env.PORT ||5002;

//middleware
app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json()); // This middleware will parse JSON bodies
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    // console.log('Server started on port: 5002')
    console.log(`😁 Server started at port : ${PORT}`);
  }); 
});
    








