import axios from './http.js'
const baseUrl = window.g.api

export const request = {
    // 登陆信息
    login: param => {
        return axios.post(`${baseUrl}login`,param)
    },

    // 查询时间轴中一天的数据
    timeShaft: param => {
        return axios.get(`${baseUrl}timeShaft`,param)
    },
    // 查询时间轴中所有数据
    allTimeShaft: () => {
        return axios.get(`${baseUrl}timeShaft/allTimeShaft`)
    },

    // 留言
    message: param => {
        return axios.get(`${baseUrl}message`,param)
    },
    // 查询留言板中所有数据
    allMessage: () => {
        return axios.get(`${baseUrl}message/allMessage`)
    },

    // 后台管理
    saveManage:param=>{
        return axios.get(`${baseUrl}manage`,param)
    },
    allManage: () => {
        return axios.get(`${baseUrl}manage/allmanage`)
    },
    deletemanage: param => {
        return axios.get(`${baseUrl}manage/deletemanage`,param)
    },
    
}