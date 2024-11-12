import axios from 'axios';

// 创建 API 请求函数，使用 OpenWeatherMap 获取天气信息
export const fetchWeather = async (city, apiKey) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                appid: apiKey,
                units: 'metric',  // 使用摄氏温度
                lang: 'zh_cn'     // 获取中文数据
            }
        });
        console.log("API Response:", response.data);  // 打印 API 响应
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data", error);
        throw error;
    }
};
