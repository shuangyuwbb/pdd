import {getHomeCasual,getRecommendShopList} from './../../src/api'
import {HOME_CASUAL,RECOMMEND_SHOP_LIST} from './mutation-types'


export default {
  //1.获取轮播首页
  async getHomeCasual({commit}){
    const res = await getHomeCasual()
    commit(HOME_CASUAL, {homecasual: res.message.data})
  },

  //2.获取推荐内容
  async getRecommendShopList({commit}){
    const res = await getRecommendShopList()
    commit(RECOMMEND_SHOP_LIST, {recommendshoplist: res.message.data})
  }
}
