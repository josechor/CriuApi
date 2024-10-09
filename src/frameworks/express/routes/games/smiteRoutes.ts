import { Router } from "express";
import { GetRankController } from "../../../../adapters/controllers/games/smite/GetRankController";
import { GetRank } from "../../../../core/use-cases/GetRank";

const router = Router();
const getRank = new GetRank();
const getRankController = new GetRankController(getRank);

router.get('/smite/rank/:userId', getRankController.execute);

export default router;