import express from "express";
import { Controller } from "../../../interfaces/Controller";
import { Rank } from "../../../models/games/Rank";
import { GetRank } from "../../../../core/use-cases/GetRank";

export class GetRankController implements Controller {
  constructor(private GetRank: GetRank) {}

  execute = async (req: express.Request, res: express.Response) => {
    const userId = req.params.userId;
    try {
      const rank = await this.GetRank.execute(userId);
      res.json(new Rank(rank.rank, rank.date));
    } catch (error) {
      res.status(500).json({ message: 'Error fetching rank data' });
    }
  };
}
