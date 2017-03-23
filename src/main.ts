import * as dotenv from 'dotenv';
dotenv.config();

import * as Koa from 'koa';
import * as json from 'koa-json';
import * as bodyparser from 'koa-bodyparser';
import { AmqpConnector } from 'amqp-connector';

import { routes } from './routes';

const app = new Koa();
export const amqp = new AmqpConnector(process.env.AMQP_URL, 'catalog-service', { type: 'topic', name: 'bidmaster-ex' });
console.log('Starting catalog service on', process.env.PORT || '8080');

app.use(json({ pretty: false }));
app.use(bodyparser());
app.use(routes);
app.listen(process.env.PORT || '8080');

amqp.listen('catalog.add').subscribe(msg => console.log(msg))