import request from "supertest";
import express from "express";
import routes from "../../../../frameworks/express/routes/index"

const app = express();
app.use(express.json());
app.use("/api", routes); // Asegúrate de usar las rutas de tu API

describe("GET /api/games/smite/rank/:userId", () => {
  it("should return rank for a given userId", async () => {
    const userId = "12345"; // Cambia esto por un userId válido para tus pruebas

    const response = await request(app).get(`/api/games/smite/rank/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("rank");
    expect(response.body).toHaveProperty("date");
  });

  it("should return 404 if userId is not found", async () => {
    const invalidUserId = "invalid"; // Simula un userId no válido

    const response = await request(app).get(
      `/api/games/smite/rank/${invalidUserId}`
    );

    expect(response.status).toBe(404);
  });
});
