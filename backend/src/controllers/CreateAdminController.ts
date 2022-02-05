import { Request, Response } from 'express';
import { CreateAdminService } from '../services/CreateAdminService';

class CreateAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password, phone, email, address } = request.body;

    const createAdminService = new CreateAdminService();

    const userAdmin = await createAdminService.execute({
      name,
      password,
      phone,
      email,
      address,
    });

    return response.status(200).json(userAdmin);
  }
}

export { CreateAdminController };
