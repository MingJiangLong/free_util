import Router from '@koa/router'
import CmdRouter from '../controller/CmdController';
import ImageUtilRouter from '../controller/ImageUtilController';
import RobotRouter from '../controller/RobotUtilController';
import XYGDRouter from '../controller/XYGDController';
const routerManager = new Router();

const routerArr = [
    CmdRouter,
    ImageUtilRouter,
    RobotRouter,
    XYGDRouter
]

routerArr.forEach(item => {
    routerManager.use('', item.routes(), item.allowedMethods())
})
export default routerManager;