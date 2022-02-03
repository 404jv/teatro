import { getCustomRepository } from "typeorm";
import { Presentation } from "../entities/Presentation";
import { ParticipantsRepository } from "../repositories/ParticipantsRepository";
import { PresentationsRepository } from "../repositories/PresentationsRepository";

interface IRequest {
  name: string;
  localization: string;
  description: string;
  date: Date;
  hour: string;
  totalAudience: string;
  participantsIds: string[];
}

class CreatePresentationService {
  async execute({
    description,
    date,
    hour,
    localization,
    name,
    totalAudience,
    participantsIds
  }: IRequest): Promise<Presentation> {
    const presentationsRepository = getCustomRepository(PresentationsRepository);
    const participantsRepository = getCustomRepository(ParticipantsRepository);

    const presentation = presentationsRepository.create({
      description,
      name,
      localization,
      hour,
      date,
      total_audience: totalAudience
    });

    const participants = await participantsRepository.findByIds(participantsIds);

    presentation.participants = participants;

    await presentationsRepository.save(presentation);

    return presentation;
  }
}

export { CreatePresentationService };
