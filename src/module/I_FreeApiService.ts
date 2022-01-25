interface I_FreeApiService {

    /**
     * 获取历史上的今天
     */
    getTodayInHistory: () => Promise<TodayInHistoryData>
}

type TodayInHistoryData = {
    code: string
    day: string
    result: { data: string, title: string }[]
}