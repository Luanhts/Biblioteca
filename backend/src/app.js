import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import rentRoutes from "./routes/rentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/users", userRoutes);
app.use("/books", bookRoutes);
app.use("/rents", rentRoutes);


export default app;
