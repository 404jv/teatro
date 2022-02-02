import { getCustomRepository } from "typeorm";
import { Participant } from "../entities/Participant";
import { ParticipantsRepository } from "../repositories/ParticipantsRepository";

class ListParticipantsService {

  async execute(): Promise<Participant[]> {
    const participantsRepository = getCustomRepository(ParticipantsRepository);

    const participants = await participantsRepository.find();

    return participants;
  }
}

export { ListParticipantsService };
