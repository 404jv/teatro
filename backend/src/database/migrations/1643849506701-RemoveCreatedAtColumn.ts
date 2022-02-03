import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class RemoveCreatedAtColumn1643849506701 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('participant_presentation', 'created_at');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'participant_presentation',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: "datetime('now')"
      })
    );
  }
}
