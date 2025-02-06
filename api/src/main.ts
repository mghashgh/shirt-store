import express, { Request, Response } from "express";
import cors from "cors";
import { calculateTotal } from "./calculateTotal";
import { app } from "./app";

const port = 3333; // Port for the backend API

// Start the server
app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
