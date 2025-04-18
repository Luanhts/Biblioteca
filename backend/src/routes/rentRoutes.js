import express from "express";
import {
    createRent,
    getAllRents,
    getRentById,
    updateRent,
    deleteRent,
    getRentsByUserId,
    getRentsByBookId,
    getRentsByUserIdAndBookId
} from "../controllers/rentController.js";

const router = express.Router();

router.post("/", createRent);
router.get("/", getAllRents);

router.get("/user/:userId/book/:bookId", getRentsByUserIdAndBookId);
router.get("/user/:userId", getRentsByUserId);
router.get("/book/:bookId", getRentsByBookId);

router.get("/:id", getRentById);
router.put("/:id", updateRent);
router.delete("/:id", deleteRent);

export default router;
