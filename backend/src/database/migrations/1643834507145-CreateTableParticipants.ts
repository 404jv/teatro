import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableParticipants1643834507145 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'participants',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'name',
						type: 'varchar',
					},
					{
						name: 'phone',
						type: 'varchar',
					},
					{
						name: 'city',
						type: 'varchar',
					},
					{
						name: 'address',
						type: 'varchar',
					},
					{
						name: 'class',
						type: 'varchar',
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: "datetime('now')",
					},
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('participants');
	}
}
