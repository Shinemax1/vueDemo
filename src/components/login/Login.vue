<template>
  <div id="Login">
    <div id="container">
      <div class="back" @click="back"></div>
      <h1 id="logo">
        <img src="../../assets/login/Login_logo.png" alt="">
      </h1>
      <div id="login-in">
        <div class="login-in-list">
          <input v-model="tel" type="number" class="login-input" id="username" placeholder="手机号">
        </div>
        <div class="login-in-list">
          <input v-model="pwd" type="password" class="login-input" id="password" placeholder="密码">
          <!-- <mu-text-field label="密码" hintText="请输入密码" type="password" labelFloat/> -->
        </div>
        <mu-raised-button @click="log">登录</mu-raised-button>
      </div>
      <div id="help-command">
        <span id="register" @click="Register">注册</span>
        <span id="forget"  @click="Forget">忘记密码</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import {Toast} from 'mint-ui';
export default {
  name: 'Login',
  data() {
    return {
      tel: null,
      pwd: null,
    };
  },
  computed: {
    ...mapGetters(['aaa', 'userId']),
  },
  methods: {
    ...mapActions([
      'login',
      'getMess',
      'indexTabbarShow',
      'getuserinfo',
      'getuserhead',
    ]),
    Register() {
      this.$router.push('Register');
    },
    Forget() {
      this.$router.push('Forget');
    },
    Choose() {
      this.$router.push('Goods');
    },
    back() {
      this.$router.go(-1);
      this.indexTabbarShow();
    },
    log() {
      if (this.tel && this.pwd) {
        this.login({
          data: {
            userPhone: this.tel,
            userPassword: this.pwd,
          },
          success: () => {
            this.getuserhead({
              data: {
                userId: this.userId,
              },
              success: data => {
                this.getuserinfo({
                  data: {
                    userId: this.userId,
                  },
                  success: data => {
                    this.$router.go(-1);
                    this.indexTabbarShow();
                  }
                });
              }
            });
          }
        });
      } else {
        Toast({
          message: '请您填写完整！',
          duration: 1500,
        });
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
#Login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(../../assets/login/Login_bg.jpg) no-repeat;
  background-size: cover;
}
#container {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 2.25rem;
}
#logo {
  width: 100%;
  margin-bottom: 1.8rem;
}
#logo img {
  width: 1.86rem;
  height: 1.86rem;
  margin: 0 auto;
}
#login-in {
  width: 100%;
}
.back {
  content: '';
  position: absolute;
  width: 0.3rem;
  height: 0.3rem;
  top: 0.27rem;
  left: 0.2rem;
  border: 0.05rem solid #ffffff;
  border-top: none;
  border-right: none;
  transform: rotate(45deg);
}
.login-input {
  display: block;
  width: 5.5rem;
  height: 0.98rem;
  background: none;
  margin: 0 auto;
  border: 0;
  border-bottom: 0.02rem solid #fcf7f5;
  font-size: 0.3rem;
  color: #fcf7f5;
  line-height: 0.9rem;
}
#username {
  margin-bottom: 0.3rem;
}
#password {
  margin-bottom: 0.98rem;
}
.login-in input::placeholder {
  color: #fcf7f5;
  font-size: 0.3rem;
}
input::-webkit-input-placeholder {
  color: #fcf7f5;
  font-size: 0.3rem;
}
input::-moz-placeholder {
  color: #fcf7f5;
  font-size: 0.3rem;
}
input::-moz-placeholder {
  color: #fcf7f5;
  font-size: 0.3rem;
}
input::-ms-input-placeholder {
  color: #fcf7f5;
  font-size: 0.3rem;
}
.mu-raised-button {
  display: block;
  width: 5.5rem;
  height: 0.98rem;
  margin: 0 auto;
  border-radius: 0.05rem;
  background-color: #f73a50;
  font-size: 0.3rem;
  color: #fcf7f5;
  text-align: center;
}
.mu-text-field {
  color: #ffffff;
}
.mu-text-field-hint {
  color: #ffffff;
}
#help-command {
  width: 100%;
  height: 0.75rem;
  padding: 0 1rem;
}
#register {
  float: left;
}
#forget {
  float: right;
}
#help-command {
  color: #fcf7f5;
  font-size: 0.25rem;
  line-height: 0.75rem;
  text-decoration: none;
}
</style>
