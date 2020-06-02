import ajax from './ajax'

//1.基础路径
const BASE_URL = 'http://127.0.0.1:3000'

//2.请求方法
export const getHomeCasual = ()=> ajax(BASE_URL + '/api/homecasual')

//3.请求推荐内容
export const getRecommendShopList = ()=>ajax(BASE_URL + '/api/recommendshoplist')
