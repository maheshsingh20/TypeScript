import express from "express";
import type { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.text());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "data.txt");

app.post("/write", (req: Request, res: Response) => {
  try {
    console.log("Request headers:", req.headers);
    console.log("Content-Type:", req.get('Content-Type'));
    console.log("Received request body:", req.body);
    console.log("Body type:", typeof req.body);
    
    let text: string;
    
    // Handle different content types
    if (req.get('Content-Type')?.includes('application/json')) {
      if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({ error: "Invalid JSON body" });
      }
      text = req.body.text;
    } else if (req.get('Content-Type')?.includes('text/plain')) {
      text = req.body as string;
    } else {
      return res.status(400).json({ 
        error: "Unsupported content type. Use application/json or text/plain",
        receivedContentType: req.get('Content-Type')
      });
    }
    
    if (!text) {
      return res.status(400).json({ error: "Text content is required" });
    }
    
    console.log("Writing to file:", filePath);
    console.log("Text to write:", text);
    
    fs.writeFileSync(filePath, text, "utf-8");
    console.log("Data written successfully");
    
    res.json({ message: "Data written successfully", filePath });
  } catch (error) {
    console.error("Error writing file:", error);
    res.status(500).json({ error: "Failed to write data", details: error instanceof Error ? error.message : String(error) });
  }
});

app.get("/read", (_req: Request, res: Response) => {
  try {
    console.log("Reading from file:", filePath);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "File not found" });
    }
    
    const data = fs.readFileSync(filePath, "utf-8");
    console.log("Data read successfully:", data);
    
    res.send(data);
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).json({ error: "Failed to read data", details: error instanceof Error ? error.message : String(error) });
  }
});

app.post("/delete", (_req: Request, res: Response) => {
  try {
    console.log("Deleting file:", filePath);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "File not found" });
    }
    fs.unlinkSync(filePath);
    console.log("File deleted successfully");
    res.json({ message: "File deleted successfully", filePath });
  } catch (error) {
    console.error("Error deleting file:", error);
    res.status(500).json({ error: "Failed to delete file", details: error instanceof Error ? error.message : String(error) });
  } 
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`File path: ${filePath}`);
  console.log(`Directory exists: ${fs.existsSync(__dirname)}`);
});
