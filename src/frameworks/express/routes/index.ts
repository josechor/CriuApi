import { Router } from "express";
import smiteRoutes from "./games/smiteRoutes";
const router = Router();

router.use("/games", smiteRoutes);

export default router;
