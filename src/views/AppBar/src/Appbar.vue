<template>
  <mu-appbar :style="{backgroundColor:backgroundColor,boxShadow:shadow}">
      <div class="appbar-left" @click="back()" :style="{borderColor:backColor}"></div>
      <div class="appbar-title">
        <h4 :style="{color:titleColor}">{{title}}</h4>
      </div>
      <h2  :style="{color:rightColor}" @click="isright">{{right}}</h2>
    </mu-appbar>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'Appbar',
  props: ['title', 'type','titleColor','backgroundColor','backColor','shadow','right','rightColor','rightClick',"isClick"],
  methods: {
    ...mapActions(['indexTabbarShow', 'indexTabbarHide']),
    back() {
      this.$router.go(-1);
      if (this.type == 0) {
        this.indexTabbarHide();
      } else {
        this.indexTabbarShow();
      }
    },
    isright(){
      if(this.isClick){
        this.rightClick();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mu-appbar {
  position: fixed;
  height: 0.88rem;
  top: 0;
  background-color: #ffffff;
  padding: 0;
  
  .appbar-left {
    content: '';
    position: absolute;
    width: 0.3rem;
    height: 0.3rem;
    top: 0.27rem;
    left: 0.2rem;
    border: 0.05rem solid #333333;
    border-top: none;
    border-right: none;
    transform: rotate(45deg);
  }
  .appbar-title {
    h4 {
      text-align: center;
      font-size: 0.38rem;
      line-height: 0.88rem;
      color: #333333;
      font-weight: 400;
    }
  }
  h2{
    line-height: 0.88rem;
    position: absolute;
    top: 0rem;
    right: 0.2rem;
    color: #333333;
    font-size: 0.33rem;
    font-weight: 400;
  }
}
</style>


