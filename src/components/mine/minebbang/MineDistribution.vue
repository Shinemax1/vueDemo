<template>
  <div id="MineDistribution">
    <Appbar title="我的分销" type="0"/>
    <div class="content">
      <ul>
        <li @click="toDetail">
          <img src="../../../assets/mine/minebbang/minedistribution/head.png" alt="">
          <h3>爱如探汤</h3>
        </li>
        <li>
          <img src="../../../assets/mine/minebbang/minedistribution/head.png" alt="">
          <h3>爱如探汤</h3>
        </li>
        <li>
          <img src="../../../assets/mine/minebbang/minedistribution/head.png" alt="">
          <h3>爱如探汤</h3>
        </li>
        <li>
          <img src="../../../assets/mine/minebbang/minedistribution/head.png" alt="">
          <h3>爱如探汤</h3>
        </li>
        <li>
          <img src="../../../assets/mine/minebbang/minedistribution/head.png" alt="">
          <h3>爱如探汤</h3>
        </li>
        <li>
          <img src="../../../assets/mine/minebbang/minedistribution/head.png" alt="">
          <h3>爱如探汤</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MineDistribution',
  methods: {
    toDetail(){
      this.$router.push({name: 'distributiondetail'});
    }
  }
}
</script>

<style lang="scss" scoped>
  .content{
    margin-top: 0.88rem;
    ul{
      li{
        height: 0.98rem;
        margin: 0 0.3rem;
        display: flex;
        border-bottom: 0.01rem solid #f4f4f4;
        img{
          height: 0.8rem;
          margin: 0.085rem 0;
        }
        h3{
          font-size: 0.28rem;
          line-height: 0.98rem;
          color: #333333;
          margin-left: 0.26rem;
        }
      }
    }
  }
</style>

