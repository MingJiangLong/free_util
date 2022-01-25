import Router from '@koa/router'
import ArticleService from '../service/ArticleUtilService';
import { HttpError } from '../util/Error';

/**
 * 文章类别
 */
const ArticleRouter = new Router({
    prefix: '/article'
});
const articleService = new ArticleService()
/**
 * //TODO:
 * 获取随机文章
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

/**
 * 获取随机笑话
 */
ArticleRouter.get('/randomjoke', async (ctx) => {
    const params = ctx.query;
    let data = await articleService.randomJoke(`${params?.type || ''}`)
    ctx.body = {
        code: 200,
        data,
        message: '获取笑话成功'
    }
})


export default ArticleRouter