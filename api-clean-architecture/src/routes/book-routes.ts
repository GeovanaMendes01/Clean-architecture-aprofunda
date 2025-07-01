import express from "express";
import { createBook, listBooks } from "../controllers/book-controller";

const router = express.Router();

router.post("/books", createBook);
router.get("/books", listBooks);

export default router;