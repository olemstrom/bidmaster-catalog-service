import * as KoaRouter from 'koa-router';
import { Context } from 'koa'

const router = new KoaRouter();
router.get('/', function* (next: Context) {
    this.body = 'Hello world';
    yield next;
});

export const routes = router.routes();