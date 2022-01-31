import { Request, Response } from "express";
import { AuthenticateAdminService } from "../services/AuthenticateAdminService";

class AuthenticateAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateAdminService = new AuthenticateAdminService();

    const token = await authenticateAdminService.execute({
      email,
      password
    });

    return response.status(200).json({
      token,
    });
  }
}

export { AuthenticateAdminController };
