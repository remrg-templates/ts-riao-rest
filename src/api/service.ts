import { RiaoRouter } from '@riao/rest';
import { HealthCheckEndpoint } from 'api-machine';

export class ServiceRouter extends RiaoRouter {
	override async routes() {
		return [HealthCheckEndpoint];
	}
}
