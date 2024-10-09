import express from "express";
import { Controller } from "../../../interfaces/Controller";
import { Rank } from "../../../models/games/Rank";

export class GetRankController implements Controller {
  execute = async (req: express.Request, res: express.Response) => {
    const userId = req.params.userId;
    const rank = "Grandmaster";

    res.json(new Rank(rank, new Date()));
  };
}
