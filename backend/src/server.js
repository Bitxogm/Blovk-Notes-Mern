import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT= process.env.PORT ||5002;
const __dirname = path.resolve()

//middleware
if(process.env.NODE_ENV !== "production"){
app.use(cors({
  origin: "http://localhost:5173",
}));

}





app.use(express.json()); // This middleware will parse JSON bodies
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, resp) => {
    resp.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
  }



connectDB().then(() => {
  app.listen(PORT, () => {
    // console.log('Server started on port: 5002')
    console.log(`😁 Server started at port : ${PORT}`);
  }); 
});
    








