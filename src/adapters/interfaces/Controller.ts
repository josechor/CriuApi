import express from 'express';
export interface Controller {
  execute(req: express.Request, res: express.Response): Promise<void> | void;
}
