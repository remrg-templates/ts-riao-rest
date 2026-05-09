import { log } from './log';
import { env } from './env';
import { server } from './api';

/**
 * Start your application in the main() function
 */
export async function main(): Promise<void> {
	log.info('Hello ' + env.APP_TITLE + ' (' + env.NODE_ENV + ')');
	log.info('Rest server running: http://localhost:' + env.API_PORT);

	if (server.swaggerEnabled) {
		log.info('Swagger UI: http://localhost:' + env.API_PORT + '/docs');
	}
}
