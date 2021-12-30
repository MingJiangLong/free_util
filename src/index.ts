
import Koa from 'koa'
import catchError from './middlewares/catchError';
import routerManager from './router';
import bodyParse from 'koa-body'
const app = new Koa();

app.use(catchError)
app.use(bodyParse())
app.use(routerManager.routes())
app.listen(3000);