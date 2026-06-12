import express from "express";
import { Pool } from "pg";

const app = express();

const db = new Pool({
  connectionString: process.env["DATABASE_URL"],
});

app.get("/", async (_req, res) => {
  const result = await db.query("SELECT NOW()");

  res.json({
    message: "Scoreboard server running",
    database: result.rows[0],
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
