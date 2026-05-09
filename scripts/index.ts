import { log } from '@/log';
import { bootstrap } from '@/app';

if (process.argv.length < 3) {
	throw new Error('Usage: npm run script -- my-script');
}

log.info('Running script', process.argv[2]);

import('./' + process.argv[2])
	.then((run) => {
		if (run.bootstrap) {
			bootstrap(run.default);
		}
		else {
			run
				.default()
				.then(() => {
					process.exit(0);
				})
				.catch((err: string | Error) => {
					log.error(err);
					process.exit(1);
				});
		}
	})
	.catch((err: string | Error) => {
		log.error('Error loading script:', err);
		process.exit(1);
	});
