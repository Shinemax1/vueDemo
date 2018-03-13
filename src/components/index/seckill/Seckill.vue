<template>
  <div id="Seckill">
    <Appbar title="秒杀" type="1"></Appbar>
    <TabbarSeckill :tabData="tabData" :func="changeTab"/>
    <Listview margin="1.88rem">
      <div slot="content">
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <img src="../../../assets/index/helphotsell/shop.jpg" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕，你最好的甜品选择,多乐之日手工蛋糕，你最好的甜品选择</p>
              <span><h3>￥288</h3><mu-raised-button>马上抢</mu-raised-button></span>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <img src="../../../assets/index/helphotsell/shop.jpg" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕，你最好的甜品选择,多乐之日手工蛋糕，你最好的甜品选择</p>
              <span><h3>￥288</h3><mu-raised-button>马上抢</mu-raised-button></span>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <img src="../../../assets/index/helphotsell/shop.jpg" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕，你最好的甜品选择,多乐之日手工蛋糕，你最好的甜品选择</p>
              <span><h3>￥288</h3><mu-raised-button>马上抢</mu-raised-button></span>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <img src="../../../assets/index/helphotsell/shop.jpg" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕，你最好的甜品选择,多乐之日手工蛋糕，你最好的甜品选择</p>
              <span><h3>￥288</h3><mu-raised-button>马上抢</mu-raised-button></span>
            </div>
          </div>
        </mu-list-item>
        <mu-list-item class="mu-list-item">
          <div class="mu-item-content">
            <img src="../../../assets/index/helphotsell/shop.jpg" alt="">
            <div class="right">
              <h2>美味手作烘培的提拉米苏</h2>
              <p>多乐之日手工蛋糕，你最好的甜品选择,多乐之日手工蛋糕，你最好的甜品选择</p>
              <span><h3>￥288</h3><mu-raised-button>马上抢</mu-raised-button></span>
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
  name: 'Seckill',
  data() {
    return {
      activeTab: 'recommend',
      tabData: [
        {
          time: '14:00',
          content: '已开抢',
        },
        {
          time: '14:00',
          content: '已开抢',
        },
        {
          time: '14:00',
          content: '已开抢',
        },
        {
          time: '14:00',
          content: '已开抢',
        },
        {
          time: '14:00',
          content: '已开抢',
        },
        {
          time: '14:00',
          content: '已开抢',
        },
        {
          time: '14:00',
          content: '已开抢',
        },
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
    padding-left: 0.2rem;
    img {
      margin: 0.2rem 0;
      height: 2.3rem;
    }
    .right {
      padding: 0.2rem 0.37rem;
      h2 {
        font-size: 0.32rem;
        line-height: 0.7rem;
        color: #333333;
        font-weight: 500;
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
        .mu-raised-button {
          float: right;
          display: block;
          margin: 0.25rem auto 0;
          min-width: 1.2rem;
          height: 0.5rem;
          color: #ffffff;
          background-color: #f73a50;
          font-size: 0.28rem;
          border-radius: 0.1rem;
        }
        h3 {
          float: left;
          margin-top: 0.25rem;
          //line-height: 0.68rem;
          font-size: 0.36rem;
          color: #f73a50;
          font-weight: 600;
        }
      }
    }
  }
}
.mu-list-item:nth-last-of-type(1) {
  border-bottom: none;
}
</style>


