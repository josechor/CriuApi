import { Router } from "express";
import { GetRankController } from "../../../../adapters/controllers/games/smite/GetRankController";

const router = Router();

router.get('/smite/rank/:userId', new GetRankController().execute);

export default router;