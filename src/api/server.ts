import { RiaoRouter } from '@riao/rest';
import { RestServer } from 'api-machine';
import { env } from '../env';
import { ApiRouter } from './router';
import { ServiceRouter } from './service';

export class MainRouter extends RiaoRouter {
	override path = '/';

	protected override async routes() {
		return [ApiRouter, ServiceRouter];
	}
}

export class Server extends RestServer {
	override router = MainRouter;

	override name = '{{ remrg:var project-name }}';
	override description = 'Rest API Server';
}

export const server = new Server({
	port: env.API_PORT,
	swaggerEnabled: env.NODE_ENV === 'development',
});
