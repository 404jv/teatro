import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity('reports')
class Report {

  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  presentation_id: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Report };
