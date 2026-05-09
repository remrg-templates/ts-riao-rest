import { RiaoRouter } from '@riao/rest';

export class V1Router extends RiaoRouter {
	override path = '/v1';

	protected override async routes() {
		return [
			/* TODO: Start adding routes! */
		];
	}
}

export class ApiRouter extends RiaoRouter {
	override path = '/api';

	protected override async routes() {
		return [V1Router];
	}
}
