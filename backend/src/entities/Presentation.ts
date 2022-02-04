import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { Participant } from "./Participant";
import { Report } from "./Report";

@Entity('presentations')
class Presentation {

  @PrimaryColumn()
  id: string;

  @Column()
  localization: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  hour: string;

  @Column()
  total_audience: string;

  @ManyToMany(() => Participant)
  @JoinTable({
    name: 'participant_presentation',
    joinColumns: [{ name: 'presentation_id' }],
    inverseJoinColumns: [{ name: 'participant_id' }]
  })
  participants: Participant[];

  @OneToMany(() => Report, (report) => report.presentation)
  reports: Report[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Presentation };
