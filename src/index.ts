import express from "express";
import shortenRoutes from "@/routes/shorten.js";
import { PORT } from "@/config.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", shortenRoutes);

app.listen(PORT, () => console.log(`🚀 Listen on PORT ${PORT}`));
