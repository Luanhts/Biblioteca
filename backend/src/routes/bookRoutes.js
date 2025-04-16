import express from "express";
import { createBook, getAllBooks, getBookByID } from "../controllers/bookController.js";

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getBookByID);

export default router;
