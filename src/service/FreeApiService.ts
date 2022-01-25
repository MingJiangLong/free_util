import REMOTE_URL from "../config/REMOTE_URL"
import { HttpUtil } from "../util/HttpUtil"

export default class FreeApiService implements I_FreeApiService {
    async getTodayInHistory() {
        let { data } = await HttpUtil.get<TodayInHistoryData>(REMOTE_URL.TODAY_IN_HISTORY);
        return data
    };

}

