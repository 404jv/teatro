import { getCustomRepository } from "typeorm";
import { Presentation } from "../entities/Presentation";
import { ParticipantsRepository } from "../repositories/ParticipantsRepository";
import { PresentationsRepository } from "../repositories/PresentationsRepository";
import { ReportsRepository } from "../repositories/ReportsRepository";

interface IReport {
  description: string;
  user_name: string;
  date: Date;
}

interface IRequest {
  name: string;
  localization: string;
  description: string;
  date: Date;
  hour: string;
  totalAudience: string;
  participantsIds: string[];
  reports: IReport[];
}

class CreatePresentationService {
  async execute({
    description,
    date,
    hour,
    localization,
    name,
    totalAudience,
    participantsIds,
    reports
  }: IRequest): Promise<Presentation> {
    const presentationsRepository = getCustomRepository(PresentationsRepository);
    const participantsRepository = getCustomRepository(ParticipantsRepository);
    const reportsRepository = getCustomRepository(ReportsRepository);

    const presentation = presentationsRepository.create({
      description,
      name,
      localization,
      hour,
      date,
      total_audience: totalAudience
    });

    const participants = await participantsRepository.findByIds(participantsIds);

    reports.map(async (report) => {
      const { date, description, user_name } = report;

      const createdReport = reportsRepository.create({
        date,
        description,
        presentation_id: presentation.id,
        user_name,
      });

      await reportsRepository.save(createdReport);
    });

    presentation.participants = participants;

    await presentationsRepository.save(presentation);

    return presentation;
  }
}

export { CreatePresentationService };
