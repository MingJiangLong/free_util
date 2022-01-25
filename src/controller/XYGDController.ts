import Router from '@koa/router'
import XYGDService from '../service/XYGDService';
import { HttpError } from '../util/Error';

/**
 * 小云工单
 */
const XYGDRouter = new Router({
    prefix: '/xygd'
});

const _XYGDService = new XYGDService();

XYGDRouter.get('/ticket', async (ctx) => {

    const data = await _XYGDService.genXYGDToken();
    ctx.body = {
        code: 200,
        data,
        message: '成功获取返回'
    }
})


export default XYGDRouter