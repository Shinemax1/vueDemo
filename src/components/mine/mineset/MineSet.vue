<template>
  <div id="MineSet">
    <Appbar title="设置"/>
    <div class="content">
        <div class="index1">
            <h2>修改手机号码</h2>
        </div>
        <div class="index2" @click="toModifyPass">
            <h2>修改登录密码</h2>
        </div>
        <div class="index3">
            <h2>支付宝账户</h2>
            <h3>15706844523</h3>
        </div>
        <div class="index2">
            <h2>音效与通知</h2>
        </div>
        <mu-raised-button @click="exit">退出当前账户</mu-raised-button>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'MineSet',
  methods: {
    ...mapActions([
      'logout',
      'indexTabbarShow'
    ]),
    toModifyPass(){
      this.$router.push('modifypassword');
    },
    exit(){
      this.logout({
        success: ()=>{
          this.$router.go(-1);
          this.indexTabbarShow();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#MineSet {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: #f4f4f4;
}
.content {
  margin-top: 0.88rem;
  .index1 {
    background-color: #ffffff;
    height: 1.12rem;
    border-top: 0.24rem solid #f4f4f4;
    padding-left: 0.4rem;
    position: relative;
    h2 {
      font-size: 0.32rem;
      line-height: 0.88rem;
      color: #333333;
      font-weight: 500;
    }
    h2::before {
      content: '';
      position: absolute;
      width: 0.2rem;
      height: 0.2rem;
      top: 0.35rem;
      right: 0.4rem;
      border: 0.03rem solid #666666;
      border-bottom: none;
      border-left: none;
      transform: rotate(45deg);
    }
  }
  .index2 {
    background-color: #ffffff;
    height: 0.89rem;
    border-top: 0.01rem solid #f4f4f4;
    padding-left: 0.4rem;
    position: relative;
    h2 {
      font-size: 0.32rem;
      line-height: 0.88rem;
      color: #333333;
      font-weight: 500;
    }
    h2::before {
      content: '';
      position: absolute;
      width: 0.2rem;
      height: 0.2rem;
      top: 0.35rem;
      right: 0.4rem;
      border: 0.03rem solid #666666;
      border-bottom: none;
      border-left: none;
      transform: rotate(45deg);
    }
  }
  .index3 {
    background-color: #ffffff;
    height: 1.31rem;
    border-top: 0.43rem solid #f4f4f4;
    padding-left: 0.4rem;
    h2 {
      float: left;
      font-size: 0.32rem;
      line-height: 0.88rem;
      color: #333333;
      font-weight: 500;
    }
    h3{
      font-size: 0.32rem;
      line-height: 0.88rem;
      color: #333333;  
      float: right;
      font-weight: 500;
      margin-right: 0.4rem;
    }
  }
  .mu-raised-button {
    display: block;
    margin: 0.8rem auto 0;
    min-width: 6rem;
    height: 0.98rem;
    color:#ffffff;
    background-color: #f73a50;
    font-size: 0.32rem;
    border-radius: 0.48rem;
  }
}
</style>


