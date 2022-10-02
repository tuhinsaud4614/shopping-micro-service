import { Router } from 'express';

import { hello } from 'controllers';

const router = Router();

router.route('/customer').get(hello);

export default router;
