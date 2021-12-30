import QrCode from 'qrcode'
import REMOTE_URL from '../config/REMOTE_URL'
import { HttpUtil } from '../util/HttpUtil'
import fs from 'fs'
export default class ImageUtilService {

    /**
     * 二维码生成
     * @param text 
     * @returns 
     */
    genQrCode(text: string,) {
        return new Promise<{ text: string, url: string }>((resolve, reject) => {

            QrCode.toDataURL(text, (e, url) => {
                if (e) reject(e)
                resolve({
                    text,
                    url
                })
            })
        })
    }

    /**
     * 随机二次元图片
     */
    async getRandomACGNImage() {
        const { data, } = await HttpUtil.get(REMOTE_URL.ACGN_IMAGE, {
            type: 'pc'
        }, {
            responseType: 'arraybuffer'
        })

        const prefix = 'data:image/*;base64,'
        const buffer = Buffer.from(data as any);
        return `${prefix}${buffer.toString('base64')}`
    }
}

