import Router from '@koa/router'
import { HttpError } from '../util/Error';
const ArticleRouter = new Router({
    prefix: '/article'
});

/**
 * 生成二维码
 */
 ArticleRouter.get('/random', async (ctx, next) => {
    const params = ctx.query;
    if (!!!params.text) throw (new HttpError(
        500,
        '未接受到text参数'
    ))
    // const data = await imageUtilService.genQrCode(`${params.text}`);
    // ctx.body = {
    //     code: 200,
    //     data,
    //     message: '生成二维码成功！'
    // }
})


export default ArticleRouter