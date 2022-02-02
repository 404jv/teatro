import { Request, Response } from "express";
import { ListParticipantsService } from "../services/ListParticipantsService";

class ListParticipantsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listParticipantsService = new ListParticipantsService();

    const participants = await listParticipantsService.execute();

    return response.status(200).json(participants);
  }
}

export { ListParticipantsController };
