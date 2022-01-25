import REMOTE_URL from '../config/REMOTE_URL'
import secret from '../config/secret'
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

    async randomJoke(type?: number | string) {
        let jokeRandomType = type || Math.round(Math.random() * 35);
        let url = `${REMOTE_URL.JOKE}?lmapi=1&sjlm=${jokeRandomType}&bm=utf&apikey=${secret.joke}`
        console.log(url);

        const { data } = await HttpUtil.get<{ data: { apileibie: string, apibiaoti: string, apineirong: string } }>(url)
        return {
            type: data.data.apileibie,
            title: data.data.apibiaoti,
            content: data.data.apineirong
        };
    }
}

