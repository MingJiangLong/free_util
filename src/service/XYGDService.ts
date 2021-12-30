import { ResponseDataType } from '../module/ApiDataType'
import { HttpUtil } from '../util/HttpUtil'
export default class XYGDService {

    lastRequestTime = 0;
    expiredTime = 0;
    ticket = '';

    /**
     * 小云工单token
     */
    async genXYGDToken() {

        const currentTime = new Date().getTime();

        // 未过期并且
        // if (!!!(currentTime - this.lastRequestTime < this.expiredTime) && !!this.ticket && !!this.expiredTime) return this.ticket;

        const { data } = await HttpUtil.post<{
            app_access_token: string
            code: number
            expire: number
            msg: string
            tenant_access_token: string
        }>('https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal', {
            "app_id": "cli_a1025e7b597a100c",
            "app_secret": "os6e1IbOIHmOy97nuT5M8c2Z2VzTkkix"
        })

        const { data: { data: { ticket, expire_in } } } = await HttpUtil.post<ResponseDataType<{
            expire_in: number
            ticket: string
        }>>('https://open.feishu.cn/open-apis/jssdk/ticket/get', {}, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${data.app_access_token}`
            }
        })

        this.ticket = ticket;
        this.expiredTime = expire_in;
        this.lastRequestTime = new Date().getTime();

        return ticket;
    }
}

