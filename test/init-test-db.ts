import { maindb } from '../database/main';
import {
	Database,
	DatabaseConnectionOptions,
	MigrationRunner,
} from '@riao/dbal';
import { log } from '@/log';

export async function initTestDb(options: {
	db?: Database;
	mg?: MigrationRunner;
	testConnectionOptions?: Partial<DatabaseConnectionOptions>;
}) {
	const db = options.db || maindb;
	const mg = options.mg || new MigrationRunner(db);

	if (!db?.env?.database) {
		await db.configureFromEnv();
	}

	const testConnectionOptions: DatabaseConnectionOptions = {
		...maindb.env,
		...options.testConnectionOptions,
	};

	log.info('Initializing database connection...');
	await db.init({
		connectionOptions: testConnectionOptions,
	});

	log.info('Running database migrations down...');
	await mg.runWithOptions({ direction: 'down' });

	log.info('Running database migrations up...');
	await mg.runWithOptions({ direction: 'up' });

	return db;
}
