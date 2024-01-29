import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.NODE_PORT || 8000;

app.get("/", (req: Request, res: Response) => {
	res.send("Hallo Welt, ich bin neu");
});

app.get("/1", (req: Request, res: Response) => {
	res.send("Trigger Workflow");
});

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
})