import dayjs from "dayjs";
import { getCustomRepository } from "typeorm";
import { Presentation } from "../entities/Presentation";
import { PresentationsRepository } from "../repositories/PresentationsRepository";

class ListPresentationsService {
  async execute(): Promise<Presentation[]> {
    const presentationsRepository = getCustomRepository(PresentationsRepository);

    const presentations = await presentationsRepository.find({
      relations: ['participants', 'reports'],
    });

    const formattedPresentations = presentations.map(presentation => {
      Object.assign(presentation, {
        date: dayjs(presentation.date).format('DD/MM/YYYY'),
      });

      return presentation;
    });

    return formattedPresentations;
  }
}

export { ListPresentationsService };
