import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTablePresentations1643838510887 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'presentations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'localization',
            type: 'varchar'
          },
          {
            name: 'date',
            type: 'timestamp'
          },
          {
            name: 'hour',
            type: 'varchar',
          },
          {
            name: 'total_audience',
            type: 'integer',
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('presentations');
  }
}
