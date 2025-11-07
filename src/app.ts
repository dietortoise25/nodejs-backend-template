import express from "express";
import cors from "cors";
import { logger, pinoHttpMiddleware } from "./utils/logger.helper.ts";

const app = express();
app.use(express.json());
app.use(cors());

// logger.info("Server is running on port 3000");
app.use(pinoHttpMiddleware);
export default app;
