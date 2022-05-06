import { Request, Response } from 'express';

abstract class BaseController {
  abstract model: any;

  // Get all
  getAll = async (req: Request, res: Response) => {
    try {
      const docs = await this.model.find({});
      return res.status(200).json(docs);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };
}

export default BaseController;
