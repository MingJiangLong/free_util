import Router from '@koa/router'
import ImageUtilService from '../service/ImageUtilService';
import { HttpError } from '../util/Error';
const ImageUtilRouter = new Router({
    prefix: '/image'
});

const imageUtilService = new ImageUtilService();
/**
 * 生成二维码
 */
ImageUtilRouter.get('/genQrCode', async (ctx, next) => {
    const params = ctx.query;
    if (!!!params.text) throw (new HttpError(
        500,
        '未接受到text参数'
    ))
    const data = await imageUtilService.genQrCode(`${params.text}`);
    ctx.body = {
        code: 200,
        data,
        message: '生成二维码成功！'
    }
})
/**
 * 生成二维码
 */
ImageUtilRouter.get('/randomACGN', async (ctx) => {
    const base64String = await imageUtilService.getRandomACGNImage();
    ctx.body = {
        code: 200,
        data: base64String,
        message: '获取图片成功！'
    }
})

export default ImageUtilRouter