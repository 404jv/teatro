import { compare } from "bcrypt";
import { getCustomRepository } from "typeorm";
import { HttpError } from "../errors/HttpError";
import { AdminsRepository } from "../repositories/AdminsRepository";
import { sign } from 'jsonwebtoken';

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateAdminService {
  async execute({ email, password }: IRequest): Promise<string> {
    const adminsRepository = getCustomRepository(AdminsRepository);

    const admin = await adminsRepository.findOne({ email });

    if (!admin) {
      throw new HttpError({
        message: 'Email or password invalid!',
        statusCode: 401,
      });
    }

    const isPasswordMatch = await compare(password, admin.password);

    if (!isPasswordMatch) {
      throw new HttpError({
        message: 'Email or password invalid!',
        statusCode: 401,
      });
    }

    const token = sign({
      email: admin.email,
    }, 'vqBw8kn-zMZ99u', {
      subject: admin.id,
      expiresIn: '1d'
    });

    return token;
  }
}

export { AuthenticateAdminService };
