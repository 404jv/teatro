import { getCustomRepository } from "typeorm";
import { Participant } from "../entities/Participant";
import { ParticipantsRepository } from "../repositories/ParticipantsRepository"

interface IRequest {
  name: string;
  phone: string;
  city: string;
  address: string;
  schoolGrade: string;
}

class CreateParticipantService {

  async execute({ address, city, name, phone, schoolGrade }: IRequest): Promise<Participant> {
    const participantsRepository = getCustomRepository(ParticipantsRepository);

    const participant = participantsRepository.create({
      address,
      city,
      name,
      phone,
      class: schoolGrade
    });

    await participantsRepository.save(participant);

    return participant;
  }
}

export { CreateParticipantService }
