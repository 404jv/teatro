import { Request, Response } from 'express';
import { ListPresentationsService } from '../services/ListPresentationsService';

class ListPresentationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPresentationService = new ListPresentationsService();

    const presentations = await listPresentationService.execute();

    return response.status(200).json(presentations);
  }
}

export { ListPresentationsController };
