import express, { Router } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const router = Router();

router.get("/", async (req, res) => {
  res.status(200).json({ msg: "hello" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port " + PORT));
