import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { connectDB } from "./src/lib/db.js";
import authrouter from "./src/routes/auth.routes.js";
import messagerouter from "./src/routes/message.routes.js";
import { app, server } from "./src/lib/socket.js"; // ✅ import APP from socket too

const PORT = process.env.PORT || 5001;

// middlewares — registered on the SAME app that server uses
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// routes
app.use("/api/auth", authrouter);
app.use("/api/messages", messagerouter);

server.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  connectDB();
});