import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class removeColumnParticipantIdReports1644527636804 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('reports', 'participant_id')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'reports',
      new TableColumn({
        name: 'participant_id',
        type: 'uuid',
      })
    );

    await queryRunner.createForeignKey(
      'reports',
      new TableForeignKey({
        name: 'FKParticipantReport',
        referencedTableName: 'participants',
        referencedColumnNames: ['id'],
        columnNames: ['participant_id'],
        onDelete: 'SET NULL',
      })
    );

  }
}
