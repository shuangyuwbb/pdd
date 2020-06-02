import {
  HOME_CASUAL,
  RECOMMEND_SHOP_LIST
} from './mutation-types'

export default {
  [HOME_CASUAL](state, {homecasual}){
    state.homecasual = homecasual
  },

  [RECOMMEND_SHOP_LIST](state, {recommendshoplist}){
    state.recommendshoplist = recommendshoplist
  }
}
