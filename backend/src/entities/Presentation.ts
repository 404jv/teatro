import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity('presentations')
class Presentation {

  @PrimaryColumn()
  id: string;

  @Column()
  localization: string;

  @Column()
  date: Date;

  @Column()
  hour: string;

  @Column()
  total_audience: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Presentation };
