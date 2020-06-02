<template>
  <div class="recommend-contain" v-if="recommendshoplist.length>0">
    <ul class="recommend">
      <shop-list
        v-for="(item, index) of recommendshoplist"
        :item=item
        :key="index"/>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import ShopList from './../../components/ShopList/ShopList'
  export default {
    name: "Recommend",
    components: {
      ShopList
    },
    data(){
      return {
      }
    },
    computed: {
      ...mapState(['recommendshoplist'])
    },
    mounted() {
      this.$store.dispatch('getRecommendShopList')
      console.log()
    }
  }

</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-contain
    background #f5f5f5
    width 100%
    height 100%
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background #f5f5f5
      margin-bottom 50px

</style>
