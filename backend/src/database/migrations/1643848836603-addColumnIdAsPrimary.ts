import { Column, MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addColumnIdAsPrimary1643848836603 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('presentations', 'id');

    await queryRunner.addColumn(
      'presentations',
      new TableColumn({
        name: 'id',
        type: 'uuid',
        isPrimary: true
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('presentations', 'id');

    await queryRunner.addColumn(
      'presentations',
      new TableColumn({
        name: 'id',
        type: 'uuid',
      })
    );
  }
}
