import { getCustomRepository } from "typeorm";
import { Admin } from "../entities/Admin";
import { AdminsRepository } from "../repositories/AdminsRepository";
import { hash } from 'bcrypt';

interface IRequest {
  name: string;
  password: string;
  phone: string;
  email: string;
  address: string;
}

class CreateAdminService {
  async execute({ address, email, name, password, phone }: IRequest): Promise<Admin> {
    const adminsRepository = getCustomRepository(AdminsRepository);

    const passwordHash = await hash(password, 8);

    const userAdmin = adminsRepository.create({
      address,
      email,
      name,
      password: passwordHash,
      phone,
    });

    await adminsRepository.save(userAdmin);

    return userAdmin;
  }
}

export { CreateAdminService };
