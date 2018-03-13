<template>
  <div id="DaySpecial">
    <Appbar title="天天特价" type="1"></Appbar>
    <Tabbar :tabData="tabData" :func="changeTab"></Tabbar>
    <Listview margin="1.68rem">
      <div slot="content">
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <img src="../../assets/index/dayspecial.png" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕</p>
              <span><h3>特&nbsp;&nbsp;&nbsp;价:&nbsp;&nbsp;&nbsp;￥</h3><h2>19.90</h2></span>
              <div class="dayprice">
                <span><h3>平日价:&nbsp;&nbsp;&nbsp;</h3><h4>￥32.00</h4></span>
              </div>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <img src="../../assets/index/dayspecial.png" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕</p>
              <span><h3>特&nbsp;&nbsp;&nbsp;价:&nbsp;&nbsp;&nbsp;￥</h3><h2>19.90</h2></span>
              <div class="dayprice">
                <span><h3>平日价:&nbsp;&nbsp;&nbsp;</h3><h4>￥32.00</h4></span>
              </div>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <img src="../../assets/index/dayspecial.png" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕</p>
              <span><h3>特&nbsp;&nbsp;&nbsp;价:&nbsp;&nbsp;&nbsp;￥</h3><h2>19.90</h2></span>
              <div class="dayprice">
                <span><h3>平日价:&nbsp;&nbsp;&nbsp;</h3><h4>￥32.00</h4></span>
              </div>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <img src="../../assets/index/dayspecial.png" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕</p>
              <span><h3>特&nbsp;&nbsp;&nbsp;价:&nbsp;&nbsp;&nbsp;￥</h3><h2>19.90</h2></span>
              <div class="dayprice">
                <span><h3>平日价:&nbsp;&nbsp;&nbsp;</h3><h4>￥32.00</h4></span>
              </div>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <img src="../../assets/index/dayspecial.png" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕</p>
              <span><h3>特&nbsp;&nbsp;&nbsp;价:&nbsp;&nbsp;&nbsp;￥</h3><h2>19.90</h2></span>
              <div class="dayprice">
                <span><h3>平日价:&nbsp;&nbsp;&nbsp;</h3><h4>￥32.00</h4></span>
              </div>
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
  name: 'DaySpecial',
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
  height: 2.84rem;
  border-bottom: 0.1rem solid #f4f4f4;
  .mu-item-content {
    display: flex;
    padding: 0 0.23rem;
    img {
      margin: 0.2rem 0;
      height: 2.33rem;
    }
    .right {
      padding: 0.2rem 0.37rem;
      h2 {
        font-size: 0.32rem;
        line-height: 0.7rem;
        color: #333333;
        font-weight: 400;
      }
      p {
        height: 0.8rem;
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
      span {
        display: flex;
        h3 {
          line-height: 0.48rem;
          font-size: 0.26rem;
          color: #f73a50;
          font-weight: 400;
        }
        h2 {
          line-height: 0.48rem;
          font-size: 0.36rem;
          color: #f73a50;
          font-weight: 600;
        }
      }
      .dayprice {
        span {
          h3 {
            font-size: 0.26rem;
            line-height: 0.4rem;
            color: #bbbbbb;
          }
          h4 {
            font-size: 0.26rem;
            line-height: 0.4rem;
            color: #bbbbbb;
            position: relative;
          }
          h4::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 0.01rem;
            top: 0.2rem;
            left: 0rem;
            background-color: #bbbbbb;
          }
        }
      }
    }
  }
}
.mu-list-item:nth-last-of-type(1) {
  border-bottom: none;
}
</style>


