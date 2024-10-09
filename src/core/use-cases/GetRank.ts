import { RankEntity } from "../entities/RankEntity";

export class GetRank {
  async execute(userId: string): Promise<RankEntity> {
    if (userId === "1") return new RankEntity("Grandmaster", new Date());
    return new RankEntity("Bronze", new Date());
  }
}
