import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { Presentation } from "./Presentation";

@Entity('reports')
class Report {

  @PrimaryColumn()
  id: string;

  @Column()
  participant_id: string;

  @JoinColumn({ name: 'presentation_id' })
  @OneToOne(() => Presentation)
  presentation: Presentation;

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
