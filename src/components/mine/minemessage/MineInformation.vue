<template>
  <div id="MineInformation">
    <div class="bg"></div>
    <Listview margin="1.68rem">
      <div slot="content">
        <mu-list-item class="mu-list-item">
          <div class="content">
            <img src="../../../assets/mine/minemessage/information-head.png" alt="">
            <div class="center">
              <div class="left">
                <h2>耷拉眼河童</h2>
                <h3>那件衣服质量可以吗</h3>
              </div>
              <div class="right">
                <h2>11:28</h2>
              </div>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="content">
            <img src="../../../assets/mine/minemessage/information-head.png" alt="">
            <div class="center">
              <div class="left">
                <h2>耷拉眼河童</h2>
                <h3>那件衣服质量可以吗</h3>
              </div>
              <div class="right">
                <h2>11:28</h2>
              </div>
            </div>
          </div>
        </mu-list-item>
      </div>
    </Listview>
  </div>
</template>

<script>
export default {
  name: 'MineInformation',
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
.mu-list-item {
  background-color: #ffffff;
  //border-bottom: 0.01rem solid #bfbfbf;
}
.content {
  display: flex;
  //padding: 0.08rem 0 0 0.15rem;
  padding-left: 0.15rem;
  img {
    height: 0.95rem;
    margin: 0.155rem 0;
  }
  .center {
    border-bottom: 0.01rem solid #bfbfbf;
    width: 6.45rem;
    padding: 0.08rem 0.3rem 0.11rem 0; 
    .left {
      float: left;
      margin-left: 0.32rem;
      h2 {
        font-size: 0.32rem;
        line-height: 0.55rem;
        color: #333333;
        font-weight: 400;
      }
      h3 {
        font-size: 0.28rem;
        line-height: 0.53rem;
        color: #666666;
      }
    }
    .right{
      float: right;
      h2{
        font-size: 0.24rem;
        line-height: 0.55rem;
        color: #666666;
      }
    }
  }
}
</style>


