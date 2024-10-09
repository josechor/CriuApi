// src/frameworks/express/middlewares/errorHandler.ts
import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../adapters/errors/AppError";

export const errorHandler = (err: Error | AppError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({ message: "Internal Server Error" });
};
