import { createConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { hash } from 'bcrypt';

async function create() {
  const connection = await createConnection();

  const id = uuidV4();
  const passwordHash = await hash('admin', 8);

  await connection.query(`
    INSERT INTO 
      admins(id, name, password, phone, email, address)
    VALUES(
      '${id}',
      'adminSys',
      '${passwordHash}',
      '999999999',
      'admin@teatro.com',
      'adminSys'
    )
  `);

  await connection.close();
}

create()
  .then(() => console.log('☑️ Admin created!'));
