import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableReports1643930340597 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'reports',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'participant_id',
            type: 'uuid',
          },
          {
            name: 'presentation_id',
            type: 'uuid',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp',
          },
        ],
        foreignKeys: [
          {
            name: 'FKParticipantReport',
            referencedTableName: 'participants',
            referencedColumnNames: ['id'],
            columnNames: ['participant_id'],
            onDelete: 'SET NULL'
          },
          {
            name: 'FKPresentationReport',
            referencedTableName: 'reports',
            referencedColumnNames: ['id'],
            columnNames: ['presentation_id'],
            onDelete: 'SET NULL'
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('reports');
  }
}
