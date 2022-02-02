import { EntityRepository, Repository } from 'typeorm';
import { Presentation } from '../entities/Presentation';

@EntityRepository(Presentation)
class PresentationsRepository extends Repository<Presentation> { }

export { PresentationsRepository };
