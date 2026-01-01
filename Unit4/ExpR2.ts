import express from "express";
import type { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.text());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "data.txt");

app.post("/write", async (req: Request, res: Response) => {
  try {
    const text  = typeof req.body==="string" ? req.body:req.body?.text;
    if (typeof text !== "string" || text.trim() === "") {
      return res.status(400).json({ error: "Text content is required" });
    }
    await fs.promises.writeFile(filePath, text, "utf-8");
    res.status(200).json({ message: "Data written successfully", filePath });
  }
  catch (error) {
    console.error("Error writing file:", error);
    res.status(500).json({ error: "Failed to write data", details: error instanceof Error ? error.message : String(error) });
  }
});
app.post("/append", async (req: Request, res: Response) => {
  try {
    const text = typeof req.body === "string" ? req.body : req.body?.text;
    if (typeof text !== "string" || text.trim() === "") {
      return res.status(400).json({ error: "Text content is required" });
    }
    await fs.promises.appendFile(filePath, text, "utf-8");
    res.status(200).json({ message: "Data appended successfully", filePath });
  } catch (error) {
    console.error("Error appending file:", error);
    res.status(500).json({ error: "Failed to append data", details: error instanceof Error ? error.message : String(error) });

  }
});
app.get("/read", async (_req: Request, res: Response) => {
  try {
    const data = await fs.promises.readFile(filePath, "utf-8");
    console.log("Data read successfully:", data);
    res.send(data);
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).json({ error: "Failed to read data", details: error instanceof Error ? error.message : String(error) });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});