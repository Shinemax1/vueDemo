<template>
  <div id="MustSellList">
    <div class="bg"></div>
    <Appbar title="必买清单" type="1"/>
    <Tabbar :tabData="tabData" :func="changeTab"></Tabbar>
    <Listview margin="1.68rem">
      <div slot="content">
        <mu-list-item>
          <div class="mu-item-content">
            <div class="part1">
              <img src="../../assets/index/buylist/banxie.png" alt="">
              <img src="../../assets/index/buylist/qiaokeli.png" alt="">
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <div class="part2">
              <img src="../../assets/index/buylist/baokuan.png" alt="">
              <ul>
                <li>
                  <img src="../../assets/index/buylist/xiezi.png" alt="">
                  <h2>黑色板鞋</h2>
                  <h3>￥188</h3>
                </li>
                <li>
                  <img src="../../assets/index/buylist/pixie.png" alt="">
                  <h2>女款皮鞋</h2>
                  <h3>￥288</h3>
                </li>
                <li>
                  <img src="../../assets/index/buylist/fanbuxie.png" alt="">
                  <h2>潮流帆布鞋</h2>
                  <h3>￥238</h3>
                </li>
              </ul>
            </div>
          </div>
        </mu-list-item>

        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <div class="part2">
              <img src="../../assets/index/buylist/baokuan.png" alt="">
              <ul>
                <li>
                  <img src="../../assets/index/buylist/xiezi.png" alt="">
                  <h2>黑色板鞋</h2>
                  <h3>￥188</h3>
                </li>
                <li>
                  <img src="../../assets/index/buylist/pixie.png" alt="">
                  <h2>女款皮鞋</h2>
                  <h3>￥288</h3>
                </li>
                <li>
                  <img src="../../assets/index/buylist/fanbuxie.png" alt="">
                  <h2>潮流帆布鞋</h2>
                  <h3>￥238</h3>
                </li>
              </ul>
            </div>
          </div>
        </mu-list-item>

        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <div class="part2">
              <img src="../../assets/index/buylist/baokuan.png" alt="">
              <ul>
                <li>
                  <img src="../../assets/index/buylist/xiezi.png" alt="">
                  <h2>黑色板鞋</h2>
                  <h3>￥188</h3>
                </li>
                <li>
                  <img src="../../assets/index/buylist/pixie.png" alt="">
                  <h2>女款皮鞋</h2>
                  <h3>￥288</h3>
                </li>
                <li>
                  <img src="../../assets/index/buylist/fanbuxie.png" alt="">
                  <h2>潮流帆布鞋</h2>
                  <h3>￥238</h3>
                </li>
              </ul>
            </div>
          </div>
        </mu-list-item>
      </div>
    </Listview>
  </div>
</template>

<script>
export default {
  name: 'MustSellList',
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
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: #f4f4f4;
}

.mu-list-item{
  margin: 0.17rem 0.11rem 0;
  background-color: #ffffff;
  border-radius: 0.18rem;
}

.mu-item-content{
  .part1{
    width: 100%;
    height: 2.41rem;
    padding: 0 0.1rem;
    display: flex;
    img{
      height: 2.2rem;
      margin: 0.17rem 0.03rem 0;
    }
  }
  .part2{
    height: 5.1rem;
    img{
      height: 2.4rem;
      margin: 0.11rem 0.09rem 0.17rem;
    }
    ul{
      display: flex;
      li{
        width: 2.42rem;
        margin: 0;
        img{
          height: 1.46rem;
          margin: 0 auto;
        }
        h2{
          width: 100%;
          text-align: center;
          font-size: 0.28rem;
          line-height: 0.5rem;
          color: #333333;
          font-weight: 400;
        }
        h3{
          font-weight: 400;
          width: 100%;
          text-align: center;
          font-size: 0.28rem;
          line-height: 0.46rem;
          color: #f73a50;
        }
      }
    }
  }
}
</style>


