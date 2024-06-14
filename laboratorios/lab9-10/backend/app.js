import cors from "cors";
import express from "express";

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Please use a POST request instead." });
});

app.post("/", (req, res) => {
  const { name="Madelaine" } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


