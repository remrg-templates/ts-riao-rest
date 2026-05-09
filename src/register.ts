import { log } from './log';
import { maindb } from '../database/main';

// {{ remrg:task Start-up and tear-down services for your app }}

/**
 * Initialize & register your app's services here
 */
export async function register(): Promise<void> {
	log.info('Booting...');

	// Register services here
	await maindb.init();
}

/**
 * Teardown services here
 */
export async function teardown(): Promise<void> {
	log.info('Tearing down...');

	// Teardown services here
	await maindb.disconnect();
}
