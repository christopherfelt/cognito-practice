import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { validateAuth } from "./auth.js";

dotenv.config();

const app = express();

app.use(cors());

const router = Router();

router.get("/", validateAuth, (req, res) => {
  console.log("made it here");
  res.status(200).json({ msg: "hello" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port " + PORT));
