import {MigrationInterface, QueryResult, QueryRunner, TableColumn} from "typeorm";

export class createColumnUserNameReports1644528894616 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'reports',
      new TableColumn({
        name: 'user_name',
        type: 'varchar'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('reports', 'user_name');
  }
}
