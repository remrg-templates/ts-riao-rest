// {{ remrg:task Global setup and teardown for Vitest }}

import { Database } from '@riao/dbal';
import { log } from '@/log';
import { testEnv } from './test-env';
import { initTestDb } from './init-test-db';

let db: Database;

export async function setup() {
	// Global setup
	log.info('Setting up test environment...');

	db = await initTestDb({
		testConnectionOptions: { database: testEnv.TEST_DB_NAME },
	});
}

export async function teardown() {
	// Global teardown
	if (db) {
		await db.disconnect();
	}
}
