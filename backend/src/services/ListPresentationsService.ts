import { getCustomRepository } from "typeorm";
import { Presentation } from "../entities/Presentation";
import { PresentationsRepository } from "../repositories/PresentationsRepository";

class ListPresentationsService {
  async execute(): Promise<Presentation[]> {
    const presentationsRepository = getCustomRepository(PresentationsRepository);

    const presentations = await presentationsRepository.find({
      relations: ['participants', 'reports'],
    });

    return presentations;
  }
}

export { ListPresentationsService };
