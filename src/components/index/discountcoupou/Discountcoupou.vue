<template>
  <div id="Discountcoupou">
    <Appbar title="优惠券" type="1"/>
    <Tabbar :tabData="tabData" :func="changeTab" bg="#000000"></Tabbar>
    <div class="content">
      <ul>
        <li>
          <div class="left">
            <span><h3>￥</h3><h2>10</h2></span>
            <h4>满500元使用</h4>
          </div>
          <div class="right">
            <h2>自营彩妆满减券</h2>
            <div class="contain">
              <h3>01/01&nbsp;&nbsp;10:00过期</h3>
              <mu-raised-button>领取</mu-raised-button>
            </div>
            <h4>部分商品适用</h4>
          </div>
        </li>
        <li>
          <div class="left">
            <span><h3>￥</h3><h2>10</h2></span>
            <h4>满500元使用</h4>
          </div>
          <div class="right">
            <h2>自营彩妆满减券</h2>
            <div class="contain">
              <h3>01/01&nbsp;&nbsp;10:00过期</h3>
              <mu-raised-button>领取</mu-raised-button>
            </div>
            <h4>部分商品适用</h4>
          </div>
        </li>
        <li>
          <div class="left">
            <span><h3>￥</h3><h2>10</h2></span>
            <h4>满500元使用</h4>
          </div>
          <div class="right">
            <h2>自营彩妆满减券</h2>
            <div class="contain">
              <h3>01/01&nbsp;&nbsp;10:00过期</h3>
              <mu-raised-button>领取</mu-raised-button>
            </div>
            <h4>部分商品适用</h4>
          </div>
        </li>
        <li>
          <div class="left">
            <span><h3>￥</h3><h2>10</h2></span>
            <h4>满500元使用</h4>
          </div>
          <div class="right">
            <h2>自营彩妆满减券</h2>
            <div class="contain">
              <h3>01/01&nbsp;&nbsp;10:00过期</h3>
              <mu-raised-button>领取</mu-raised-button>
            </div>
            <h4>部分商品适用</h4>
          </div>
        </li>
        <li>
          <div class="left">
            <span><h3>￥</h3><h2>10</h2></span>
            <h4>满500元使用</h4>
          </div>
          <div class="right">
            <h2>自营彩妆满减券</h2>
            <div class="contain">
              <h3>01/01&nbsp;&nbsp;10:00过期</h3>
              <mu-raised-button>领取</mu-raised-button>
            </div>
            <h4>部分商品适用</h4>
          </div>
        </li>
        <li>
          <div class="left">
            <span><h3>￥</h3><h2>10</h2></span>
            <h4>满500元使用</h4>
          </div>
          <div class="right">
            <h2>自营彩妆满减券</h2>
            <div class="contain">
              <h3>01/01&nbsp;&nbsp;10:00过期</h3>
              <mu-raised-button>领取</mu-raised-button>
            </div>
            <h4>部分商品适用</h4>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Discountcoupou',
  data() {
    return {
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
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 1.68rem;
  overflow: hidden;
  ul {
    li {
      margin: 0.34rem 0.4rem 0;
      background-image: url(../../../assets/index/discountcoupou/bg.png);
      background-size: contain;
      width: 6.7rem;
      height: 2.16rem;
      display: flex;
      .left {
        width: 2.3rem;
        height: 2.16rem;
        border-right: 0.02rem dashed #ffffff;
        span {
          display: flex;
          margin-left: 0.25rem;
          margin-top: 0.3rem;
          h3 {
            width: 0.45rem;
            padding-top: 0.45rem;
            font-size: 0.6rem;
            color: #ffffff;
            font-weight: 400;
          }
          h2 {
            line-height: 1rem;
            font-size: 1.1rem;
            color: #ffffff;
            font-weight: 800;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
        }
        h4 {
          line-height: 0.5rem;
          font-size: 0.26rem;
          text-align: center;
          color: #ffffff;
        }
      }
      .right {
        // width: 3.76rem;
        // height: 2.16rem;
        box-sizing: border-box;
        padding: 0.3rem 0.4rem 0.3rem 0.25rem;
        h2 {
          line-height: 0.6rem;
          color: #ffffff;
          font-size: 0.28rem;
        }
        .contain {
          width: 3.76rem;
          height: 0.5rem;
          h3 {
            line-height: 0.5rem;
            color: #ffffff;
            font-size: 0.26rem;
            float: left;
          }
          .mu-raised-button {
            float: right;
            display: block;
            margin: auto 0;
            min-width: 1.2rem;
            height: 0.5rem;
            color: #ffffff;
            background-color: rgba(1, 1, 1, 0);
            font-size: 0.26rem;
            border-radius: 0.04rem;
            border: 0.01rem solid #ffffff;
          }
        }
        h4 {
          line-height: 0.47rem;
          color: #ffffff;
          font-size: 0.26rem;
        }
      }
    }
  }
}
</style>


