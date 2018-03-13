<template>
  <div id="MineMessage">
    <Appbar title="消息" isClick="false"/>
    <mu-tabs  :value="activeTab" @change="handleTabChange">
      <mu-tab title="交易物流" value="tradelogistics"/>
      <mu-tab title="通知" value="inform"/>
      <mu-tab title="消息" value="message"/>
    </mu-tabs>
    <div class="content">
      <transition name="fade">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MineMessage',
  data() {
    return {
      activeTab: 'tradelogistics',
    };
  },
  methods: {
    handleTabChange(val) {
      this.activeTab = val;
      switch (val) {
        case 'tradelogistics':
          this.$router.replace('minetradelogistics');
          //this.$router.push('minemessage/minetradelogistics');
          //this.$router.replace({name: 'minetradelogistics'});
          break;
        case 'inform':
          //this.$router.replace({name:'mineinform'});
          this.$router.replace('mineinform');          
          break;
        case 'message':
          this.$router.replace('mineinformation');          
          //this.$router.replace({name:'mineinformation'});
          break;
        default:
          this.$router.replace('minetradelogistics');          
          //this.$router.replace({name:'minetradelogistics'});
          break;
      }
    },
  },
  created() {
    this.$router.replace('minetradelogistics');          
    //this.$router.replace({name: 'minetradelogistics'});
    //this.$router.replace('minetradelogistics');
  },
  mounted() {
    //topLine样式
    let aNavLine = document.querySelector('.mu-tab-link-highlight');
    aNavLine.style.background = 'rgba(0,0,0,0)';
    aNavLine.innerHTML =
      '<i style="display:block;height:0.04rem;width:0.8rem;margin-left:0.84rem;background:#f73a50;"><i>';
    //mu-ripple-wrapper
    let aWrapper = document.querySelectorAll('.mu-ripple-wrapper');
    for (let i = 0; i < 5; i++) {
      aWrapper[i].style.marginTop = '0.14rem';
      aWrapper[i].style.height = '0.68rem';
    }
  },
};
</script>

<style lang="scss" scoped>
.mu-tabs {
  position: fixed;
  border-top: 0.06rem solid #e4e4e4;
  border-bottom: 0.01rem solid #e4e4e4;
  top: 0.88rem;
  height: 0.75rem;
  background-color: #ffffff !important;
  .mu-tab-link {
    color: #999999;
  }
  .mu-tab-active {
    color: #333333;
  }
}

.content {
  margin-top: 1.68rem;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>


