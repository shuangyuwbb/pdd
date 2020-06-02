<template>
  <a class="recommend_item" v-for="(item, index) of recommendshoplist" :key="index">
    <img :src="item.thumb_url" alt="" width="100%" v-if="item.thumb_url">
    <h4 class="item-title">{{item.short_name}}</h4>
    <div class="item-bottom">
      <span class="item-price">￥{{item.price / 100}}</span>
      <span class="item-sales-tip">{{item.sales_tip}}</span>
      <button>找相关</button>
    </div>
  </a>
</template>

<script>
    export default {
        name: "ShopList"
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend_item
    width 49.5%
    margin-bottom 50px
    background #fff
    padding-bottom 15px
    margin-bottom 15px
    .item-title
      height 20px
      line-height 20px
      font-size 13px
      font-weight lighter
      overflow hidden
      margin 5px 0
      padding 0 5px
    .item-bottom
      display flex
      flex-direction row
      align-items center
      padding 0 6px
      .item-price
        flex 2
        color red
        font-size 12px
        font-weight border
      .item-sales-tip
        flex 4
        color #666
        font-size 10px

      button
        flex 2
        font-size 13px
        background transparent
        border-radius 5px
        height 25px
        color red
        border 1px solid orangered


</style>
