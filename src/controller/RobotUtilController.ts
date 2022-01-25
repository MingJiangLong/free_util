import Router from '@koa/router'
import RobotService from '../service/RobotService';
import { HttpError } from '../util/Error';

/**
 * 机器人
 */
const RobotRouter = new Router({
    prefix: '/robot'
});


const robotService = new RobotService()
/**
 * 聊天机器人
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