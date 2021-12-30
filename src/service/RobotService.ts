import REMOTE_URL from '../config/REMOTE_URL'
import { HttpUtil } from '../util/HttpUtil'
export default class RobotService {


    /**
     * 和机器人聊天
     */
    async chatWithRobot(msg: string) {
        const { data, } = await HttpUtil.get(REMOTE_URL.ROBOT, {
            key: 'free',
            appid: 0,
            msg,
        })
        return data

    }
}

