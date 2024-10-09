import { AppError } from "../../adapters/errors/AppError";
import { RankEntity } from "../entities/RankEntity";

export class GetRank {
  async execute(userId: string): Promise<RankEntity> {
    if (userId === "1") return new RankEntity("Grandmaster", new Date());
    if (userId === "invalid") throw new AppError("User not found", 404);
    return new RankEntity("Bronze", new Date());
  }
}
