import express, { Request, Response } from "express";
import cors from "cors";
import { calculateTotal } from "./calculateTotal";

export const app = express();

// Middleware to parse JSON
app.use(express.json());

// Allow only the web-app running the api
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// API endpoint to calculate total in shopping cart
app.post("/total", (req: Request, res: Response) => {
  // Retrieve item counts from query parameters
  const {
    shirt1,
    shirt2,
    shirt3,
    shirt4,
    shirt5,
  }: {
    shirt1: number;
    shirt2: number;
    shirt3: number;
    shirt4: number;
    shirt5: number;
  } = req.body;

  // Check if the item counts are valid
  if (
    typeof shirt1 !== "number" ||
    typeof shirt2 !== "number" ||
    typeof shirt3 !== "number" ||
    typeof shirt4 !== "number" ||
    typeof shirt5 !== "number"
  ) {
    res.status(400).json({ error: "All item counts must be valid numbers" });
    return;
  }

  // Perform the calculation
  const total = calculateTotal(shirt1, shirt2, shirt3, shirt4, shirt5);

  // Return the result as a response
  res.status(200).json({ total });
});
