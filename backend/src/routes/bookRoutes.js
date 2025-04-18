import express from "express";
import { createBook, getAllBooks, getBookByID, updateBook, deleteBook } from "../controllers/bookController.js";

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getBookByID);
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)

export default router;
