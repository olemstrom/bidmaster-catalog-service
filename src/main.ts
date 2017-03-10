import * as Koa from 'koa';

import { routes } from './routes';

const app = new Koa();

app.use(routes);
app.listen(process.env.PORT || '8080');