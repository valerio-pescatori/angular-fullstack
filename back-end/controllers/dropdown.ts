import { Request, Response } from 'express';
import * as fs from 'fs';

class DropdownController {
  get = (req: Request, res: Response) => {
    fs.readFile(
      'front-end/assets/landing/drop' + req.params.tab + '.json',
      (err, data) => {
        if (err) res.status(400).json({ error: err.message });
        else {
          res.status(200).json(JSON.parse(data.toString())['data']);
        }
      }
    );
  };
}

export default DropdownController;
