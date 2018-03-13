<template>
  <div id="DistributionDetail">
    <div class="bg"></div>
    <Appbar title="分销详情" type="0"/>
    <div class="content">
      <ul>
        <li>
          <div class="left">
            <img src="../../../assets/mine/minebbang/distributiondetail/head.png" alt="">
            <h3>耷拉眼河童-</h3>
          </div>
          <div class="right">
            <ul>
              <li>
                <h2>发布日期</h2>
                <h3>2017-12-28</h3>
              </li>
              <li>
                <h2>订单数量</h2>
                <h3>3</h3>
              </li>
              <li>
                <h2>订单金额</h2>
                <h3>99.00元</h3>
              </li>
              <li>
                <h2>佣金金额</h2>
                <h3>0.99元/笔</h3>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div class="left">
            <img src="../../../assets/mine/minebbang/distributiondetail/head.png" alt="">
            <h3>耷拉眼河童-</h3>
          </div>
          <div class="right">
            <ul>
              <li>
                <h2>发布日期</h2>
                <h3>2017-12-28</h3>
              </li>
              <li>
                <h2>订单数量</h2>
                <h3>3</h3>
              </li>
              <li>
                <h2>订单金额</h2>
                <h3>99.00元</h3>
              </li>
              <li>
                <h2>佣金金额</h2>
                <h3>0.99元/笔</h3>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DistributionDetail',
};
</script>

<style lang="scss" scoped>
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: #f4f4f4;
}
.content {
  position: relative;
  margin-top: 0.88rem;
  overflow: hidden;
  >ul {
    >li {
      width: 6.88rem;
      height: 4.1rem;
      background-image: url(../../../assets/mine/minebbang/distributiondetail/bg.png);
      background-size: 6.88rem 4.1rem;
      margin: 0.2rem 0.4rem 0;
      display: flex;
      .left {
        width: 2.35rem;
        margin-left: 0.1rem;
        img {
          height: 1.24rem;
          margin: 0.72rem auto 0;
        }
        h3 {
          font-size: 0.28rem;
          line-height: 0.98rem;
          color: #ffffff;
          text-align: center;
        }
      }
      .right{
        padding: 0.2rem 0.22rem 0 0.2rem;
        ul{
          li{
            margin: 0;
            display: flex;
            padding-left: 0.22rem;
            h2{
              font-size: 0.32rem;
              line-height: 0.88rem;
              font-weight: 400;
              color: #333333;
            }
            h3{
              font-size: 0.3rem;
              line-height: 0.88rem;
              color: #333333;
              font-weight: 400;
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
  }
}
</style>


