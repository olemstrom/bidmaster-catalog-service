import * as dotenv from 'dotenv';
dotenv.config();

import * as Koa from 'koa';
import * as json from 'koa-json';

import { routes } from './routes';
import { publish, listen } from './queue';

const app = new Koa();

console.log('Starting catalog service');

global.setInterval(() => {
    publish('date', Date.now().toString());
}, 1200);

listen('date').subscribe(v => console.log('endval', v));


app.use(json({ pretty: false }));
app.use(routes);
app.listen(process.env.PORT || '8080');