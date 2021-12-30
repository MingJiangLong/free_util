import Router from '@koa/router'
import RobotService from '../service/RobotService';
import { HttpError } from '../util/Error';
const RobotRouter = new Router({
    prefix: '/robot'
});

const robotService = new RobotService()
/**
 * 生成二维码
 */
RobotRouter.get('/chat', async (ctx) => {
    const params = ctx.query;
    if (!!!params.msg) throw (new HttpError(
        500,
        '未接受到text参数'
    ))
    const data = await robotService.chatWithRobot(`${params.msg}`);
    ctx.body = {
        code: 200,
        data,
        message: '成功获取返回'
    }
})


export default RobotRouter