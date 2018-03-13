<template>
  <div id="MineInform">
    <div class="bg"></div>
    <Listview margin="1.68rem">
      <div slot="content">
        <mu-list-item class="mu-list-item">
          <div class="content">
            <img src="../../../assets/mine/minemessage/inform-head.png" alt="">
            <div class="center">
              <h2>波风水门关注了你</h2>
              <h3>12-13</h3>
            </div>
            <div class="right">
              <mu-raised-button>关注</mu-raised-button>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="content">
            <img src="../../../assets/mine/minemessage/inform-head.png" alt="">
            <div class="center">
              <h2>波风水门赞了你</h2>
              <h3>12-13</h3>
            </div>
            <div class="right">
              <img src="../../../assets/mine/minemessage/inform-shop.png" alt="">
            </div>
          </div>
        </mu-list-item>
      </div>
    </Listview>
  </div>
</template>

<script>
export default {
  name: 'MineInform',
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
  border-bottom: 0.01rem solid #bfbfbf;
}
.content {
  padding: 0.18rem 0.28rem 0.28rem 0.33rem;
  display: flex;
  img {
    height: 0.66rem;
    margin: 0.16rem 0;
  }
  .center {
    margin-left: 0.22rem;
    width: 5rem;
    h2 {
      font-size: 0.32rem;
      line-height: 0.56rem;
      color: #333333;
    }
    h3 {
      font-size: 0.24rem;
      line-height: 0.42rem;
      color: #666666;
    }
  }
  .right {
    width: 1rem;
    height: 0.98rem;
    .mu-raised-button {
      display: block;
      margin: 0.28rem 0;
      min-width: 1rem;
      height: 0.44rem;
      color: #f73a50;
      background-color: #ffffff;
      font-size: 0.28rem;
      border-radius: 0.05rem;
      border: 0.02rem solid #f73a50;
    }
    img{
      float: right;
      height: 0.76rem;
      margin-top: 0.15rem;
      //margin: auto 0;
    }
  }
}
</style>


