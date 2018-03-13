<template>
  <div id="HelpHotSell">
    <Appbar title="帮帮热销" type="1"></Appbar>
    <Tabbar :tabData="tabData" :func="changeTab"></Tabbar>
    <Listview margin="1.68rem">
      <div slot="content">
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <span><img src="../../assets/index/helphotsell/tag.png" alt=""><p>1</p></span>
            <img src="../../assets/index/helphotsell/shop.jpg" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕，你最好的甜品选择,多乐之日手工蛋糕，你最好的甜品选择</p>
              <h3>￥288</h3>
              <h4>销售指数<span>100</span></h4>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <span><img src="../../assets/index/helphotsell/tag.png" alt=""><p>1</p></span>
            <img src="../../assets/index/helphotsell/shop.jpg" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕，你最好的甜品选择,多乐之日手工蛋糕，你最好的甜品选择</p>
              <h3>￥288</h3>
              <h4>销售指数<span>100</span></h4>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <span><img src="../../assets/index/helphotsell/tag.png" alt=""><p>1</p></span>
            <img src="../../assets/index/helphotsell/shop.jpg" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕，你最好的甜品选择,多乐之日手工蛋糕，你最好的甜品选择</p>
              <h3>￥288</h3>
              <h4>销售指数<span>100</span></h4>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <span><img src="../../assets/index/helphotsell/tag.png" alt=""><p>1</p></span>
            <img src="../../assets/index/helphotsell/shop.jpg" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕，你最好的甜品选择,多乐之日手工蛋糕，你最好的甜品选择</p>
              <h3>￥288</h3>
              <h4>销售指数<span>100</span></h4>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <span><img src="../../assets/index/helphotsell/tag.png" alt=""><p>1</p></span>
            <img src="../../assets/index/helphotsell/shop.jpg" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕，你最好的甜品选择,多乐之日手工蛋糕，你最好的甜品选择</p>
              <h3>￥288</h3>
              <h4>销售指数<span>100</span></h4>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <span><img src="../../assets/index/helphotsell/tag.png" alt=""><p>1</p></span>
            <img src="../../assets/index/helphotsell/shop.jpg" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕，你最好的甜品选择,多乐之日手工蛋糕，你最好的甜品选择</p>
              <h3>￥288</h3>
              <h4>销售指数<span>100</span></h4>
            </div>
          </div>
        </mu-list-item>
      </div>
    </Listview>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'HelpHotSell',
  data() {
    return {
      activeTab: 'recommend',
      tabData: [
        '首页',
        '箱包衣服',
        '农副产品',
        '运动健身',
        '运动健身',
        '运动健身',
        '运动健身',
        '运动健身',
        '运动健身',
        '运动健身',
      ],
    };
  },
  methods: {
    changeTab(index) {
      //console.log(index);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.mu-list-item {
  height: 2.71rem;
  border-bottom: 0.01rem solid #d6d6d6;
  .mu-item-content {
    display: flex;
    span {
      position: relative;
      img {
        height: 0.33rem;
      }
      p {
        position: absolute;
        top: 0.1rem;
        left: 0.07rem;
        font-size: 0.22rem;
        color: #ffffff;
      }
    }
    img {
      margin: 0.2rem 0;
      height: 2.3rem;
    }
    .right {
      padding: 0.2rem 0.37rem;
      h2 {
        font-size: 0.32rem;
        line-height: 0.47rem;
        color: #333333;
      }
      p {
        width: 4.15rem;
        font-size: 0.28rem;
        line-height: 0.4rem;
        color: #bbbbbb;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      h3 {
        line-height: 0.68rem;
        font-size: 0.36rem;
        color: #f73a50;
        font-weight: 600;
      }
      h4 {
        position: relative;
        width: 1.15rem;
        line-height: 0.4rem;
        font-size: 0.24rem;
        color: #ffffff;
        text-align: center;
        background-color: #f73a50;
        span {
          padding: 0 0.1rem;
          max-width: 2rem;
          left: 1.15rem;
          position: absolute;
          line-height: 0.38rem;
          font-size: 0.24rem;
          color: #f73a50;
          border: 0.01rem solid #f73a50;
        }
      }
    }
  }
}
.mu-list-item:nth-last-of-type(1) {
  border-bottom: none;
}
</style>


