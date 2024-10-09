import express from "express";
import { Controller } from "../../../interfaces/Controller";
import { Rank } from "../../../models/games/Rank";
import { GetRank } from "../../../../core/use-cases/GetRank";
import { RankEntity } from "../../../../core/entities/RankEntity";

export class GetRankController implements Controller {
  constructor(private getRank: GetRank) {}

  execute = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const userId = req.params.userId;
      const rank: RankEntity = await this.getRank.execute(userId);
      res.json(rank);
    } catch (error) {
      next(error);
    }
  };
}
