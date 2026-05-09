import { log } from '@/log';
import { env } from '@/env';

// Add this flag to run app's register/teardown
// export const bootstrap = true;

/**
 * Do something!
 */
export default async function example(): Promise<void> {
	log.info('App Name: ', env.APP_TITLE);
	log.warn('Environment: ', env.NODE_ENV);
}
