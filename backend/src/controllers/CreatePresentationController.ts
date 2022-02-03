import { Request, Response } from 'express';
import { CreatePresentationService } from '../services/CreatePresentationService';

class CreatePresentationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      localization,
      date,
      hour,
      totalAudience,
      description,
      participantsIds
    } = request.body;

    const createPresentationService = new CreatePresentationService();

    const presentation = await createPresentationService.execute({
      name,
      localization,
      date,
      hour,
      totalAudience,
      description,
      participantsIds
    });


    return response.status(201).json(presentation);
  }
}

export { CreatePresentationController };
