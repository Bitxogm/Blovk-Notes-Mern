import express from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesControllers.js";

const router = express.Router();
//Endpoints

// Send the notes
router.get("/", getAllNotes);
router.get("/:id", getNoteById);

// Create  the notes
router.post("/",createNote);

// Update the notes
router.put("/:id", updateNote);

// Delete the notes
router.delete("/:id", deleteNote);

export default router;




