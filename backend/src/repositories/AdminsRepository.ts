import { Repository } from "typeorm"
import { Admin } from "../entities/Admin"

class AdminsRepository extends Repository<Admin> { }

export { AdminsRepository };
