<template>
  <div id="AddAddress">
    <Appbar title="添加新地址" type="0" right="保存" :rightClick="save" isClick="true"/>
    <div class="content">
      <ul>
        <li>
          <h2>收货人</h2>
          <input type="text" v-model="addressInfo.userName" placeholder="请填写收货人姓名">
        </li>
        <li>
          <h2>联系电话</h2>
          <input type="number" v-model="addressInfo.userPhone" placeholder="请填写收货人号码">
          <!-- <img src="../../../assets/mine/deliveryaddress/add.png" alt=""> -->
        </li>
        <li>
          <h2>所在地区</h2>
          <input type="text" v-model="addressInfo.userCity" placeholder="请填写收货人所在地">
          <!-- <h3>请选择</h3> -->
        </li>
        <li>
          <h2>街道</h2>
          <input type="text" v-model="addressInfo.userTown" placeholder="请填写收货人城镇">
          <!-- <h3>请选择</h3> -->
        </li>
      </ul>
      <textarea placeholder="请填写详细信息，内容不少于5个字" v-model="addressInfo.userAddress"/>
      <div class="default">
        <h2>设为默认</h2>
        <mt-switch class="mt-switch" v-model="switchCheck" @change="turn"></mt-switch>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import {Toast} from 'mint-ui';
export default {
  name: 'AddAddress',
  data() {
    return {
      value: true,
      addressInfo: {},
    };
  },
  computed: {
    ...mapGetters(['userId']),
    switchCheck: {
      get: function(){
        return this.addressInfo.isDefault == 1?true:false;
      },
      set: function(){

      }
    }
  },
  methods: {
    ...mapActions(['saveaddress', 'updateaddress']),
    turn() {
      if (this.addressInfo.isDefault == 0) {
        let a = document.querySelector(
          '.mint-switch-input:checked + .mint-switch-core'
        );
        a.style.borderColor = '#f63c52';
        a.style.backgroundColor = '#f63c52';
        this.addressInfo.isDefault = 1;
      } else {
        let b = document.querySelector('.mint-switch-core');
        b.style.borderColor = '#d9d9d9';
        this.addressInfo.isDefault = 0;
      }
    },
    save() {
      if (this.addressInfo.id) {
        this.updateaddress({
          data: {
            id: this.addressInfo.id,
            userId: this.userId,
            userPhone: this.addressInfo.userPhone,
            userCity: this.addressInfo.userCity,
            userTown: this.addressInfo.userTown,
            userAddress: this.addressInfo.userAddress,
            isDefault: this.addressInfo.isDefault,
            userName: this.addressInfo.userName,
          },
          success: () => {
            this.$router.go(-1);
          },
        });
      } else {
        if (
          this.addressInfo.userName &&
          this.addressInfo.userPhone &&
          this.addressInfo.userCity &&
          this.addressInfo.userTown &&
          this.addressInfo.userAddress
        ) {
          this.saveaddress({
            data: {
              userId: this.userId,
              userPhone: this.addressInfo.userPhone,
              userCity: this.addressInfo.userCity,
              userTown: this.addressInfo.userTown,
              userAddress: this.addressInfo.userAddress,
              isDefault: this.addressInfo.isDefault,
              userName: this.addressInfo.userName,
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
      }
    },
  },
  updated() {},
  mounted() {
    if (this.addressInfo.isDefault == 1) {
      let a = document.querySelector(
        '.mint-switch-input:checked + .mint-switch-core'
      );
      a.style.borderColor = '#f63c52';
      a.style.backgroundColor = '#f63c52';
    }
  },
  created() {
    if (this.$route.params) {
      this.addressInfo = this.$route.params;
      if(!this.addressInfo.id){
        this.addressInfo.isDefault = 0;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
#AddAddress {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: #f4f4f4;
}
.content {
  margin-top: 0.88rem;
  ul {
    li {
      height: 0.88rem;
      border-bottom: 0.01rem solid #f4f4f4;
      background-color: #ffffff;
      padding: 0 0.4rem 0 0.2rem;
      margin: 0;
      h2 {
        width: 1.3rem;
        line-height: 0.87rem;
        font-size: 0.32rem;
        color: #333333;
        font-weight: 500;
        float: left;
      }
      input {
        width: 5.3rem;
        height: 0.86rem;
        line-height: 0.87rem;
        font-size: 0.32rem;
        color: #666666;
        font-weight: 500;
        margin-left: 0.2rem;
        float: left;
      }
      img {
        float: right;
        height: 0.39rem;
        margin: 0.23rem 0.1rem 0.23rem 0;
      }
      h3 {
        width: 1.3rem;
        float: right;
        line-height: 0.87rem;
        font-size: 0.28rem;
        color: #ababab;
        position: relative;
      }
      h3::before {
        content: '';
        position: absolute;
        width: 0.2rem;
        height: 0.2rem;
        top: 0.33rem;
        right: 0.2rem;
        border: 0.02rem solid #ababab;
        border-bottom: none;
        border-left: none;
        transform: rotate(45deg);
      }
    }
  }
  textarea {
    width: 100%;
    height: 2.6rem;
    font-size: 0.32rem;
    line-height: 0.5rem;
    padding: 0.2rem;
    color: #666666;
  }
  .default {
    background-color: #ffffff;
    width: 100%;
    height: 1.08rem;
    border-top: 0.2rem solid #f4f4f4;
    padding: 0 0.2rem;
    h2 {
      line-height: 0.88rem;
      font-size: 0.32rem;
      color: #333333;
      font-weight: 500;
      float: left;
    }
    .mt-switch {
      float: right;
      margin: 0.18rem 0;
      height: 0.52rem;
    }
  }
}
</style>

