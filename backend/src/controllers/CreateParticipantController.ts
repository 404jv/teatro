import { Request, Response } from "express";
import { CreateParticipantService } from "../services/CreateParticipantService";

class CreateParticipantController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, phone, city, address, schoolGrade } = request.body;

    const createParticipantService = new CreateParticipantService();

    const participant = await createParticipantService.execute({
      name,
      phone,
      city,
      address,
      schoolGrade,
    });

    return response.status(201).json(participant);
  }
}

export { CreateParticipantController };
