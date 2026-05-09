import { AppConfig, configure } from 'ts-appconfig';

/**
 * Environment Variables Schema
 */
export class Environment extends AppConfig {
	readonly APP_TITLE = '{{ remrg:var project-name }}';

	readonly MAIN_DB_NAME: string = 'database/main/main.db';
}

/**
 * Load & export environment variables
 */
export const env: Environment = configure(Environment);
