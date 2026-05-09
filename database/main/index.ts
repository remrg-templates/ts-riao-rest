import { DatabaseSqlite } from '@riao/sqlite';

import { env } from '../../src/env';

export default class MainDatabase extends DatabaseSqlite {
	override name = 'main';

	override configureFromEnv(): void {
		this.env = {
			NODE_ENV: env.NODE_ENV,
			host: '',
			port: 0,
			username: '',
			password: '',
			database: env.MAIN_DB_NAME,
		};
	}
}

export const maindb = new MainDatabase();
