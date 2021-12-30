import Router from '@koa/router'
import CmdUtilService from '../service/CmdUtilService';
import { HttpError } from '../util/Error';

const cmdService = new CmdUtilService()
const CmdRouter = new Router({
    prefix: '/cmd'
});

/**
 * 执行cmd命令
 */
CmdRouter.post('/exe', async (ctx, next) => {

    // TODO:判断是否是同源  不是不执行命令
    cmdService.exe()
})
CmdRouter.get('/test', async (ctx, next) => {

    // TODO:判断是否是同源  不是不执行命令
    cmdService.exe()
    ctx.body = {
        code: 200,
        data: 'test 调用成功',
        message: 'test 调用成功！'
    }
})


export default CmdRouter