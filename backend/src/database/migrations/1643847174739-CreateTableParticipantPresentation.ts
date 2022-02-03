import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableParticipantPresentation1643847174739 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'participant_presentation',
        columns: [
          {
            name: 'participant_id',
            type: 'uuid'
          },
          {
            name: 'presentation_id',
            type: 'uuid'
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: 'FKParticipantPresentation',
            referencedTableName: 'participants',
            referencedColumnNames: ['id'],
            columnNames: ['participant_id'],
            onDelete: 'CASCADE',
          },
          {
            name: 'FKPresentationParticipant',
            referencedTableName: 'presentations',
            referencedColumnNames: ['id'],
            columnNames: ['presentation_id'],
            onDelete: 'CASCADE',
          },
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('participant_presentation');
  }
}
