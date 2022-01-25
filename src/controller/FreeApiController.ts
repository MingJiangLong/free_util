import Router from '@koa/router'
import FreeApiService from '../service/FreeApiService';

const freeUtilService = new FreeApiService();
/**
 * 免费接口调用
 */
const FreeApiRouter = new Router({
    prefix: '/free'
});


FreeApiRouter.get('/todayinhistory', async (ctx, next) => {
    const data = await freeUtilService.getTodayInHistory()
    ctx.body = {
        code: 200,
        data,
        message: '获取历史上今天成功!'
    }
})
export default FreeApiRouter
