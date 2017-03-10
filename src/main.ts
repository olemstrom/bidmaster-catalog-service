import * as Koa from 'koa';
import * as json from 'koa-json';

import { routes } from './routes';

const app = new Koa();

app.use(json({ pretty: false }));
app.use(routes);
app.listen(process.env.PORT || '8080');