import * as KoaRouter from 'koa-router';
import { Context } from 'koa'

import { Catalog } from './catalog';
import { randomId } from './utils';

interface Item {
    id: string;
    name: string;
    description?: string;
}

const items: Item[] = [
    { id: '2', name: 'Potato'},
    { id: '1', name: 'Potato2'},
    { id: '3', name: 'Potato3'}
];


const router = new KoaRouter();
router.post('/api/item', function* (next: Context) {
    const body = this.request.body;
    const {name, description, current_price} = body;
    const state = 'OPEN';
    const id = '5IRDhW74tr'//randomId(10);

    try {
        const result = yield Catalog.add({ id, name, description, current_price, state});
        this.body = { status: 'ok', message: 'Item added successfully' }
    } catch(err) {
        console.error(err);
        this.body = { status: 'error', message: 'Error trying to store item' }
    }


});

export const routes = router.routes();