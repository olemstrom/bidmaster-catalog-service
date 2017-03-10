import * as KoaRouter from 'koa-router';
import { Context } from 'koa'

import { Catalog } from './catalog';

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
    Catalog.add({ id: body['id'], name: body['name'] });
    yield next;
});

export const routes = router.routes();