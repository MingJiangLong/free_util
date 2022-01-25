import Koa from 'koa'
export default async function catchError(
    ctx: Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext, any>,
    next: Koa.Next) {
    try {
        await next();
    } catch (error: any) {
        ctx.response.status = error.code;
        ctx.response.body = {
            code: error?.code || 500,
            message: error?.message || '服务器繁忙！'
        }
    }
}