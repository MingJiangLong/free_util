import REMOTE_URL from '../config/REMOTE_URL'
import { HttpUtil } from '../util/HttpUtil'
export default class ArticleService {


    /**
     * 随机文章
     */
    async randomArticle(msg: string) {
        const { data, } = await HttpUtil.get(REMOTE_URL.ROBOT, {
            key: 'free',
            appid: 0,
            msg,
        })
        return data

    }
}

