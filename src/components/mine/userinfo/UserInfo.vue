<template>
  <div id="UserInfo" @click="closePicker()">
    <Appbar title="个人资料" type="1" :right="right" :rightClick="save" isClick="true"/>
    <div class="content">
      <div class="head">
        <img v-if="head" :src="head" alt="">
        <img v-else src="../../../assets/mine/default-head.png" alt="">
        <mu-raised-button>修改头像<input @change="addPhoto" id="file" type="file" accept="image/*"></mu-raised-button>
      </div>
      <ul>
        <li>
          <h2>名字</h2>
          <input placeholder="请输入您的名字" v-model="userInfo.userName"></input>
        </li>
        <li>
          <h2>性别</h2>
          <input @click.stop="openSexPicker()" placeholder="请选择您的性别" readonly="readonly" v-model="sex"></input>
        </li>
        <li>
          <h2>生日</h2>
          <input @click="openPicker()" placeholder="请选择您的出生日期" readonly="readonly" v-model="changeDate"></input>
        </li>
        <li>
          <h2>常住地</h2>
          <input placeholder="请输入您的地址" v-model="userInfo.userLocation"></input>
        </li>
      </ul>
    </div>
    <mt-picker @click.stop v-if="ifPicker" v-model="userInfo.userSex" ref="sexpicker" valueKey="name" :slots="slots" @change="onValuesChange" ></mt-picker>
    <!-- 时间选择器 -->
    <mt-datetime-picker
      ref="picker2"
      type="date"
      v-model="userInfo.userBirthday"
      cancelText=""
      confirmText=""
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="startDate"
      :endDate="endDate">
    </mt-datetime-picker>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import {Toast, DatetimePicker, Picker} from 'mint-ui';
export default {
  name: 'UserInfo',
  data() {
    return {
      right: '保存',
      userInfo: {},
      startDate: new Date('1900'),
      endDate: new Date(),
      ifPicker: false,
      slots: [
        {
          flex: 1,
          values: ['男', '女'],
          className: 'slot1',
        },
      ],
      head: '',
      a: '1560150400',
      sex: '男',
    };
  },
  computed: {
    ...mapGetters(['userId', 'userhead', 'userinfo']),
    changeDate() {
      if (this.userInfo.userBirthday) {
        return (
          new Date(this.userInfo.userBirthday).getFullYear() +
          '-' +
          (new Date(this.userInfo.userBirthday).getMonth() + 1) +
          '-' +
          new Date(this.userInfo.userBirthday).getDate()
        );
      } else {
        return '';
      }
    },
  },
  methods: {
    ...mapActions([
      'saveuserinfo',
      'indexTabbarShow',
      'getuserinfo',
      'saveuserhead',
      'getuserhead',
    ]),
    save() {
      if (
        this.userInfo.userName &&
        !isNaN(this.userInfo.userSex) &&
        this.changeDate &&
        this.userInfo.userLocation
      ) {
        this.saveuserinfo({
          data: {
            userId: this.userId,
            userName: this.userInfo.userName,
            userSex: this.userInfo.userSex,
            userBirthday: this.changeDate,
            userLocation: this.userInfo.userLocation,
          },
          success: () => {
            this.$router.go(-1);
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
    openPicker() {
      this.$refs.picker2.open();
    },
    openSexPicker() {
      this.ifPicker = true;
    },
    closePicker() {
      this.ifPicker = false;
    },
    onValuesChange(picker, values) {
      this.userInfo.userSex = values[0] == '男' ? 0 : 1;
      this.sex = values[0];
    },
    addPhoto() {
      const imgs = document.querySelector('#file').files;
      let self = this;
      if (imgs.length === 0) return;
      lrz(imgs[0], {quality: 0.4})
        .then(function(rst) {
          // 处理成功会执行
          self.saveuserhead({
            data: {
              userHeadPortrait: rst.base64,
              userId: self.userId,
            },
            success: () => {
              self.head = rst.base64;
            },
          });
        })
        .catch(function(err) {
          // 处理失败会执行
        })
        .always(function() {
          // 不管是成功失败，都会执行
        });
    },
  },
  created() {
    this.userInfo.userSex = 0;
    if (this.userinfo) {
      this.userInfo = this._.cloneDeep(this.userinfo);
      this.sex = this.userInfo.userSex == 0 ? '男' : '女';
    }
    if (this.userhead) {
      this.head = this.userhead;
    }
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 0.88rem;
  overflow: hidden;
  .head {
    height: 2.5rem;
    border-bottom: 0.01rem solid #f4f4f4;
    img {
      height: 1.3rem;
      width: 1.3rem;
      margin: 0.22rem auto;
      border-radius: 50%;
    }
    .mu-raised-button {
      display: block;
      margin: 0 auto;
      min-width: 1.6rem;
      height: 0.58rem;
      color: #666666;
      background-color: #ffffff;
      font-size: 0.28rem;
      border-radius: 0.04rem;
      border: 0.01rem solid #f73a50;
      position: relative;
      input {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: none;
        opacity: 0;
      }
    }
  }
  ul {
    li {
      display: flex;
      height: 0.89rem;
      margin: 0;
      border-bottom: 0.01rem solid #f4f4f4;
      padding: 0 0.4rem;
      h2,
      input {
        width: 5.2rem;
        font-size: 0.3rem;
        line-height: 0.88rem;
        color: #666666;
      }
      h2 {
        width: 1.5rem;
      }
      input {
        margin: 0.05rem 0;
      }
    }
  }
}
.picker {
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>


