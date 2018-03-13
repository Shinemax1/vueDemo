<template>
  <div id="ModifyPassword">
    <Appbar title="修改密码" type="0"/>
    <div class="content">
      <div class="pass">
        <h2>原密码</h2>
        <input type="password" placeholder="原密码" v-model="pass">
      </div>
      <div class="pass">
        <h2>新密码</h2>
        <input type="password" placeholder="新密码" v-model="tpass">
      </div>
      <h2>密码由6-20位英文、数字或符号组成</h2>
      <mu-raised-button @click="modify">下一步</mu-raised-button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import {Toast} from 'mint-ui';
export default {
  name: 'ModifyPassword',
  data() {
    return {
      pass: '',
      tpass: '',
    };
  },
  computed: {
    ...mapGetters(['userId']),
  },
  methods: {
    ...mapActions(['changePwd']),
    modify() {
      if (this.pass && this.tpass) {
        this.changePwd({
          data: {
            userId: this.userId,
            oldPassword: this.pass,
            newPassword: this.tpass,
          },
          success: () => {
            this.$router.go(-1);
          },
        });
      } else {
        Toast({
          message: '请您填写完整！',
          duration: 1500,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#ModifyPassword {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: #f4f4f4;
}
.content {
  width: 7.5rem;
  margin-top: 0.88rem;
  overflow: hidden;
  .pass {
    width: 7.5rem;
    height: 0.88rem;
    background-color: #ffffff;
    margin-top: 0.23rem;
    padding-left: 0.3rem;
    display: flex;
    h2 {
      line-height: 0.88rem;
      font-size: 0.32rem;
      color: #333333;
      font-weight: 500;
    }
    input {
      width: 5.5rem;
      margin-left: 0.42rem;
      line-height: 0.88rem;
      font-size: 0.32rem;
      color: #333333;
    }
  }
  h2 {
    margin-left: 0.3rem;
    line-height: 0.65rem;
    font-size: 0.26rem;
    color: #666666;
    font-weight: 500;
  }
  .mu-raised-button {
    display: block;
    margin: 0.5rem auto 0;
    min-width: 6rem;
    height: 0.98rem;
    color: #ffffff;
    background-color: #f73a50;
    font-size: 0.32rem;
    border-radius: 0.48rem;
  }
}
</style>


