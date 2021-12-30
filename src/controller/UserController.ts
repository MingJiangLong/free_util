import Router from '@koa/router'
import { HttpError } from '../util/Error';
const ArticleRouter = new Router({
    prefix: '/user'
});

ArticleRouter.get('/login', () => {
    
})