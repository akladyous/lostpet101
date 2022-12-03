import { api } from './api.js'

export const post = async (url, data, controller) => {
    const dataStringified = JSON.stringify(data);
    const config = {
        method: 'post',
        url: url,
        data: dataStringified,
        ...(controller && { signal: controller.signal })
    };
    const response = await api(config)
    return response
}
