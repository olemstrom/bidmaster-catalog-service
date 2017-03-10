import * as KoaRouter from 'koa-router';
import { Context } from 'koa'

import { Catalog } from './catalog';
import { randomId } from './utils';


const router = new KoaRouter();
router.post('/api/item', function* (next: Context) {
    const body = this.request.body;
    const {name, description, current_price} = body;
    const state = 'OPEN';
    const id = randomId(10);

    try {
        const result = yield Catalog.add({ id, name, description, current_price, state});
        this.body = { status: 'ok', message: 'Item added successfully' }
    } catch(err) {
        console.error(err);
        this.body = { status: 'error', message: 'Error trying to store item' }
    }


});

export const routes = router.routes();