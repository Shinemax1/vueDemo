<template>
  <div id="Register">
    <div id="container">
      <div class="back" @click="back"></div>
      <h1 id="logo">
        <img src="../../assets/login/Login_logo.png" alt="">
      </h1>
      <div id="reg-input">
        <input v-model="tel" type="number" class="reg-in" id="number" placeholder="手机号">
        <input v-model="pwd" type="password" class="reg-in" id="password" placeholder="密码">
        <div id="code">
        <input v-model="code" type="text" id="ver-code" placeholder="验证码">
        <div id="reg-code" @click="get">{{vcodeName}}</div>
        </div>
        <mu-raised-button @click="go">注册</mu-raised-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import {Toast} from 'mint-ui';
export default {
  name: 'Register',
  data() {
    return {
      tel: null,
      pwd: null,
      code: null,
      vcodeName: '获取验证码',
    };
  },
  computed: {
    ...mapGetters(['token', 'login']),
  },
  methods: {
    ...mapActions(['getCode', 'register', 'sendVcode', 'indexTabbarShow']),
    // 获取验证码
    get() {
      if (this.tel) {
        if (this.vcodeName == '重新获取' || this.vcodeName == '获取验证码') {
          this.sendVcode({
            data: {
              mobile: this.tel,
            },
            success: () => {
              this.vcodeName = '120';
              var sum = 120;
              var thus = this;
              var timer = setInterval(function() {
                sum -= 1;
                thus.vcodeName = String(sum);
                if (sum == 0) {
                  thus.vcodeName = '重新获取';
                  clearInterval(timer);
                }
              }, 1000);
            },
          });
        } else {
          Toast({
            message: '过于繁忙！',
            duration: 1500,
          });
        }
      } else {
        Toast({
          message: '请您填写完整！',
          duration: 1500,
        });
      }
    },
    // 注册
    go() {
      if (this.tel && this.pwd && this.code) {
        this.register({
          data: {
            userPhone: this.tel,
            userPassword: this.pwd,
            vCode: this.code,
          },
          success: () => {
            this.$router.go(-2);
            this.indexTabbarShow();
          },
        });
      } else {
        Toast({
          message: '请您填写完整！',
          duration: 1500,
        });
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  //生命周期
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
#Register {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(../../assets/login/Login_bg.jpg) no-repeat;
  background-size: cover;
}
#container {
  width: 100%;
  height: 100%;
  padding-top: 2rem;
}
#logo {
  width: 100%;
  margin-bottom: 1.2rem;
}
#logo img {
  width: 1.86rem;
  height: 1.86rem;
  margin: 0 auto;
}
#for-input {
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
.reg-in {
  width: 5.5rem;
  height: 1.2rem;
  background: none;
  margin: 0 auto;
  border: 0;
  border-bottom: 0.02rem solid #fcf7f5;
  font-size: 0.3rem;
  color: #fcf7f5;
  line-height: 0.9rem;
}
#code {
  width: 5.5rem;
  height: 0.9rem;
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 1rem;
}
#ver-code {
  width: 3rem;
  height: 0.9rem;
  background: none;
  float: left;
  border-bottom: 0.02rem solid #fcf7f5;
  font-size: 0.3rem;
  color: #fcf7f5;
  line-height: 0.9rem;
}
#reg-code {
  width: 1.95rem;
  height: 0.88rem;
  border: 0.02rem solid #fcf7f5;
  border-radius: 0.05rem;
  float: right;
  font-size: 0.25rem;
  color: #fcf7f5;
  line-height: 0.88rem;
  text-align: center;
}
#password {
  margin-bottom: 0.3rem;
}

input::placeholder {
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
  width: 5.5rem;
  height: 0.98rem;
  margin: 0 auto;
  border-radius: 0.05rem;
  background-color: #f73a50;
  font-size: 0.3rem;
  color: #fcf7f5;
  text-align: center;
}
button,
input {
  display: block;
}
</style>
