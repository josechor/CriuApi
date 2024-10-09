import { AppError } from "../../../../adapters/errors/AppError";
import { RankEntity } from "../../../../core/entities/RankEntity";
import { GetRank } from "../../../../core/use-cases/GetRank";

describe("GetRank Use Case", () => {
  const getRank = new GetRank();

  it("should return rank Grandmaster for userId 1", async () => {
    const result = await getRank.execute("1");
    expect(result).toEqual(new RankEntity("Grandmaster", expect.any(Date)));
  });

  it('should throw an AppError with message "User not found" and statusCode 404', async () => {
    try {
      await getRank.execute("invalid");
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
      expect(error).toEqual(
        expect.objectContaining({
          message: "User not found",
          statusCode: 404,
        })
      );
    }
  });
});
