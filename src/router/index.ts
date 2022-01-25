import Router from '@koa/router'
import ArticleRouter from '../controller/ArticleController';
import CmdRouter from '../controller/CmdController';
import FreeApiRouter from '../controller/FreeApiController';
import ImageUtilRouter from '../controller/ImageUtilController';
import RobotRouter from '../controller/RobotUtilController';
import XYGDRouter from '../controller/XYGDController';
const routerManager = new Router();
routerManager.prefix('/api')
const routerArr = [
    CmdRouter,
    ImageUtilRouter,
    RobotRouter,
    XYGDRouter,
    FreeApiRouter,
    ArticleRouter
]

routerArr.forEach(item => {
    routerManager.use('', item.routes(), item.allowedMethods())
})
export default routerManager;