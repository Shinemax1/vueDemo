<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <hello-world></hello-world> -->
    <div id="content">
      <transition name="fade">
        <!-- <keep-alive>
          <router-view></router-view>
        </keep-alive> -->
        <router-view></router-view>
      </transition>
    </div>
    <mt-tabbar fixed v-if="indexIfTabbar" fixed v-model="selected">
      <mt-tab-item id="index">
        <img slot="icon" src="">
        首页
      </mt-tab-item>
      <mt-tab-item id="helpcircle">
        <img slot="icon" src="">
        帮帮圈
      </mt-tab-item>
      <mt-tab-item id="choose" @click="toChoose">
        <div class="daiyan">
          <div class="daiyan_deshadow"></div>
          <div class="daiyan_red">
          </div>
        </div>
        <img slot="icon" src="">
        代言
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img slot="icon" src="">
        购物车
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>


<script>
//mt-tabbar路由配置
import mtTabbar from './components/m-tabber/MTabber';
import mtTabItem from './components/m-tabber/MTabberItem';
import {mapActions,mapGetters} from 'vuex';
export default {
  name: 'app',
  data() {
    return {
      bottomNav: 'movies',
      selected: 'index',
    };
  },
  components: {
    mtTabbar,
    mtTabItem,
  },
  methods: {
    ...mapActions(['indexTabbarHide']),
    handleChange(val) {
      this.bottomNav = val;
    },
    toChoose(){
      this.$router.push('choose');
      this.indexTabbarHide();
    }
  },
  created() {
    
  },
  computed: {
    ...mapGetters(['indexIfTabbar']),
  },
  mounted() {
    this.$router.push('index');
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#content {
  //margin-bottom: 1.2rem;
}

// mu-bottom-nav {

// }
.mint-tabbar {
  position: fixed;
  box-shadow: 0 0 0.3rem 0.01rem #e4e5e0;
  a:nth-of-type(1) .mint-tab-item-icon {
    background-image: url(./assets/bottom/index.png);
  }
  a:nth-of-type(2) .mint-tab-item-icon {
    height: 0.44rem;
    width: 0.56rem;
    background-image: url(./assets/bottom/helpcircle.png);
  }
  a:nth-of-type(4) .mint-tab-item-icon {
    background-image: url(./assets/bottom/shopcart.png);
  }
  a:nth-of-type(5) .mint-tab-item-icon {
    height: 0.44rem;
    width: 0.42rem;
    background-image: url(./assets/bottom/mine.png);
  }
  a:nth-of-type(1).is-selected .mint-tab-item-icon {
    background-image: url(./assets/bottom/index_active.png);
  }
  a:nth-of-type(2).is-selected .mint-tab-item-icon {
    background-image: url(./assets/bottom/helpcircle_active.png);
  }
  a:nth-of-type(4).is-selected .mint-tab-item-icon {
    background-image: url(./assets/bottom/shopcart_active.png);
  }
  a:nth-of-type(5).is-selected .mint-tab-item-icon {
    background-image: url(./assets/bottom/mine_active.png);
  }
  a:nth-of-type(3) {
    position: relative;
    .daiyan {
      position: absolute;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #ffffff;
      top: -0.4rem;
      left: 0.25rem;
      box-shadow: 0 0 0.3rem 0.01rem #e4e5e0;
      .daiyan_deshadow {
        position: absolute;
        width: 1.4rem;
        height: 0.66rem;
        background-color: #ffffff;
        top: 0.375rem;
        left: -0.2rem;
      }
      .daiyan_red {
        position: absolute;
        width: 0.88rem;
        height: 0.88rem;
        background-color: #f73a50;
        top: 0.06rem;
        left: 0.06rem;
        border-radius: 50%;
      }
      .daiyan_red::before {
        content: '';
        width: 0.46rem;
        height: 0.04rem;
        transform: rotate(0deg);
        display: block;
        background: #ffffff;
        position: absolute;
        top: 0.4rem;
        left: 0.222rem;
      }
      .daiyan_red::after {
        content: '';
        width: 0.46rem;
        height: 0.04rem;
        transform: rotate(90deg);
        display: block;
        background: #ffffff;
        position: absolute;
        top: 0.4rem;
        left: 0.222rem;
      }
    }
  }
  a {
    height: 0.98rem;
    background: white;
    border-top: 0.03rem solid #ffffff;
    color: #ffffff;
    padding: 0.1rem;
    .mint-tab-item-icon {
      height: 0.46rem;
      width: 0.46rem;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      margin-bottom: 0.1rem;
      img {
        opacity: 0;
      }
    }
    .mint-tab-item-label {
      color: #333333;
      margin-bottom: 0.02rem;
    }
  }
  a:nth-of-type(n).is-selected .mint-tab-item-label {
    color: #f73a50;
  }
  a.mint-tab-item.is-selected {
    background: white;
    color: #ffffff;
    text-decoration-color: #ffffff;
  }
  a.mint-tab-item-label.is-selected {
    color: #f73a50;
  }
  .mint-tab-item {
    text-decoration: none !important;
    //color:#f73a50;
  }
}
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
