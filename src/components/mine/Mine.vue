<template>
  <div id="Mine">
    <!-- 顶部的Toolbar部分 -->
    <mu-appbar class="mu-appbar">
      <!-- <div class="appbar-left" slot="left">
        <h4>首页</h4>
      </div> -->
      <div class="appbar-right" slot="right"></div>
      <mu-icon-menu icon="" slot="right">
        <mu-menu-item title="菜单 1"/>
        <mu-menu-item title="菜单 2"/>
        <mu-menu-item title="菜单 3"/>
        <mu-menu-item title="菜单 4"/>
        <mu-menu-item title="菜单 5"/>
      </mu-icon-menu>
    </mu-appbar>
    <div class="head">
      <div class="head-icon">
        <img v-if="userHead1" :src="userHead1" alt="">
        <img v-else @click="toLogin" src="../../assets/mine/default-head.png" alt="">
      </div>
      <div class="head-name">
        <p>
          <span v-if="userInfo1&&Login">
            {{userInfo1.userName}}
            <img v-if="userInfo1.userSex=='1'" src="../../assets/mine/head-sex.png" alt="">
            <img v-else src="../../assets/mine/head-sex1.png" alt="">
          </span>
          <span v-else-if="Login"  @click="toLogin">游客</span>
          <span v-else  @click="toLogin">登录</span>
        </p>
      </div>
      <div class="head-other">
        <p><span @click="toAttention">关注&nbsp;&nbsp;42万&nbsp;&nbsp;</span>|<span @click="toFans">&nbsp;&nbsp;粉丝&nbsp;&nbsp;56.7万</span></p>
      </div>
    </div>
    <div class="edit">
      <mu-raised-button @click="toUserInfo">编辑个人资料</mu-raised-button>
    </div>
    <div class="content">
      <ul>
        <li @click="toMinebbang">
          <img src="../../assets/mine/my-help.png" alt="" >
          <p>我的帮帮</p>
        </li>
        <li @click="toMinecollect">
          <img src="../../assets/mine/my-collect.png" style="height:0.26rem;" alt="">
          <p>我的收藏</p>
        </li>
        <li @click="toMinemsg">
          <img src="../../assets/mine/my-message.png" style="height:0.28rem;" alt="">
          <p>消息</p>
        </li>
        <li @click="toMinelocation">
          <img src="../../assets/mine/my-location.png" style="height:0.35rem;" alt="">
          <p>收货地址</p>
        </li>
        <li @click="toMineorder">
          <img src="../../assets/mine/my-order.png" style="height:0.36rem;" alt="">
          <p>订单</p>
        </li>
        <li @click="toMineSet">
          <img src="../../assets/mine/my-set.png" style="height:0.28rem;" alt="">
          <p>设置</p>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script>
import {mapActions, mapGetters} from 'vuex';
import {Toast} from 'mint-ui';
export default {
  name: 'Mine',
  data() {
    return {
      userInfo1: {},
      userHead1: '',
      Login: false,
    };
  },
  computed: {
    ...mapGetters(['userinfo', 'userhead', 'login']),
  },
  methods: {
    ...mapActions(['indexTabbarHide']),
    toLogin() {
      if (!this.login) {
        this.$router.push('Login');
        this.indexTabbarHide();
      }
    },
    toMinebbang() {
      this.$router.push('minebbang');
      this.indexTabbarHide();
    },
    toMineSet() {
      this.$router.push('mineset');
      this.indexTabbarHide();
    },
    toUserInfo() {
      this.$router.push('userinfo');
      this.indexTabbarHide();
    },
    toMinecollect() {
      Toast('暂未开放');      
      // if (this.login) {
      // } else {
      //   this.$router.push('Login');
      // }
      // this.indexTabbarHide();
    },
    toMinemsg() {
      this.$router.push('minemessage');
      this.indexTabbarHide();
    },
    toMinelocation() {
      this.$router.push('deliveryaddress');
      this.indexTabbarHide();
    },
    toMineorder() {
      Toast('暂未开放');
      // if (this.login) {
      // } else {
      //   this.$router.push('Login');
      // }
      // this.indexTabbarHide();
    },
    toAttention() {
      this.$router.push('mineattention');
      this.indexTabbarHide();
    },
    toFans() {
      this.$router.push('minefans');
      this.indexTabbarHide();
    },
  },
  created() {
    if (this.userinfo) {
      this.userInfo1 = this.userinfo;
    }
    this.userHead1 = this.userhead;
    this.Login = this.login;
  },
};
</script>

<style lang="scss" scoped>
#Mine {
  background-image: url('../../assets/mine/mine-bg.jpg');
  background-size: 7.5rem 4.5rem;
  width: 100%;
  height: 4.5rem;
}
.mu-appbar {
  position: fixed;
  height: 0.88rem;
  top: 0;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
  .appbar-left {
    margin-left: 0.5rem;
    h4 {
      align-items: center;
      font-size: 0.28rem;
      line-height: 0.4rem;
      color: #ffffff;
    }
    h4::before {
      content: '';
      width: 0.2rem;
      height: 0.2rem;
      transform: rotate(45deg);
      display: block;
      position: absolute;
      border: none;
      border-bottom: 0.03rem solid #ffffff;
      border-left: 0.03rem solid #ffffff;
      top: 0.34rem;
      left: 0.35rem;
    }
  }
  .mu-icon-menu {
    width: 0.88rem;
    height: 0.88rem;
    background-size: 0.44rem;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: -0.03rem;
    background-image: url('../../assets/helpcircle/more.png');
  }
}
.head {
  padding-top: 0.88rem;
  width: 100%;
  height: 4.5rem;
  .head-icon {
    img {
      height: 1.6rem;
      margin: 0 auto;
      border-radius: 50%;
    }
  }
  .head-name {
    text-align: center;
    display: flex;
    p {
      width: 7.5rem;
      span {
        position: relative;
        line-height: 0.98rem;
        font-size: 0.28rem;
        color: #ffffff;
        text-align: center;
        img {
          position: absolute;
          top: 0.03rem;
          right: -0.4rem;
          height: 0.32rem;
        }
      }
    }
    img {
      height: 0.27rem;
      margin: auto 0;
    }
  }
  .head-other {
    display: flex;
    p {
      width: 100%;
      line-height: 0.33rem;
      font-size: 0.28rem;
      text-align: center;
      color: #ffffff;
    }
  }
}
.edit {
  width: 100%;
  height: 1.28rem;
  border-bottom: 0.1rem solid #f4f4f4;
  overflow: hidden;
  .mu-raised-button {
    display: block;
    margin: 0.3rem auto 0;
    min-width: 2.7rem;
    height: 0.58rem;
    color: #ffffff;
    background-color: #f73a50;
    font-size: 0.32rem;
    border-radius: 0.04rem;
  }
}
.content {
  ul {
    padding: 0 0.3rem;
    li {
      margin: 0;
      display: flex;
      border-bottom: 0.01rem solid #f4f4f4;
      img {
        margin: auto 0.25rem;
        height: 0.4rem;
      }
      p {
        font-size: 0.32rem;
        line-height: 0.96rem;
        color: #333333;
      }
    }
  }
}
</style>


