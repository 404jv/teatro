import { EntityRepository, Repository } from 'typeorm';
import { Report } from '../entities/Report';

@EntityRepository(Report)
class ReportsRepository extends Repository<Report> { }

export { ReportsRepository };
