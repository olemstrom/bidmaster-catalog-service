import * as KoaRouter from 'koa-router';
import { Context } from 'koa'

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
router.get('/', function* (next: Context) {
    this.body = items;
    yield next;
});

export const routes = router.routes();