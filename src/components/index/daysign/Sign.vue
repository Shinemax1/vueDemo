<template>
  <div id="Sign">
    <Appbar title="每日签到" type="1"/>
    <div class="content">
      <div class="head">
        <div v-if="!isSign" class="sign"  @click="signed">
          <h2>签到</h2>
          <h3>+8积分</h3>
        </div>
        <div v-else class="signed">
          <div class="hand">
            <img src="../../../assets/index/daysign/hand.png" alt="">
          </div>
          <h3>已签到</h3>
        </div>
        <mu-raised-button>连续签到会有更多惊喜哦</mu-raised-button>
      </div>
      <div class="body">
        <Calendar :signDay="signDay" :allAmount="allAmount" :continueAmount="continueAmount"/>
        <mu-raised-button>查看我的积分</mu-raised-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'Sign',
  data() {
    return {
      signDay: [],
      isSign: false,
      continueAmount: 0,
      point: 0,
      allAmount: 0,
      isContinue: 0,
    };
  },
  computed: {
    ...mapGetters(['userId']),
  },
  methods: {
    ...mapActions(['sign', 'getSign']),
    signed() {
      let date =
        new Date().getFullYear() +
        '-' +
        (new Date().getMonth() + 1) +
        '-' +
        new Date().getDate();
      this.sign({
        data: {
          userId: this.userId,
          date: date,
          isContinue: this.isContinue,
          continueAmount: this.continueAmount + 1,
        },
        success: () => {
          this.isSign = true;
          this.signDay.push(new Date().getDate());
          this.continueAmount++;
          this.allAmount++;
          this.signDay.push(1);
        },
      });
    },
  },
  created() {
    let date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1);
    this.getSign({
      data: {
        userId: this.userId,
        date: date,
      },
      success: data => {
        if (data.dates.length > 0) {
          if (data.dates[1] == new Date().getDate() - 1) {
            this.isContinue = 2;
          } else {
            this.isContinue = 1;
          }
          if (data.dates[0] == new Date().getDate()) {
            this.isSign = true;
          }
        }
        this.allAmount = data.allAmount;
        this.continueAmount = data.continueAmount;
        this.point = data.point;
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 0.88rem;
  overflow: hidden;
  .head {
    width: 7.5rem;
    height: 3.75rem;
    background: url(../../../assets/index/daysign/bg.png) no-repeat;
    background-size: contain;
    overflow: hidden;
    .sign {
      margin: 0.4rem auto 0;
      width: 2.73rem;
      height: 2.17rem;
      background: url(../../../assets/index/daysign/signBg.png) no-repeat;
      background-size: contain;
      padding-top: 0.5rem;
      padding-left: 0.2rem;
      h2 {
        margin: 0 auto;
        width: 0.78rem;
        text-align: center;
        line-height: 0.75rem;
        font-size: 0.38rem;
        color: #9f4950;
        font-weight: 600;
        border-bottom: 0.02rem solid #f15b6b;
      }
      h3 {
        width: 100%;
        text-align: center;
        font-weight: 600;
        line-height: 0.5rem;
        font-size: 0.24rem;
        color: #666666;
      }
    }
    .signed {
      margin: 0.4rem auto 0;
      width: 2.73rem;
      height: 2.17rem;
      background: url(../../../assets/index/daysign/signedBg.png) no-repeat;
      background-size: contain;
      padding-top: 0.5rem;
      padding-left: 0.2rem;
      .hand {
        display: flex;
        width: 100%;
        height: 0.6rem;
        align-items: center;
        justify-content: center;
        img {
          height: 0.4rem;
        }
      }
      h3 {
        width: 100%;
        text-align: center;
        font-weight: 600;
        line-height: 0.7rem;
        font-size: 0.3rem;
        color: #ffffff;
      }
    }
    .mu-raised-button {
      display: block;
      margin: 0.27rem 1.8rem 0;
      min-width: 3.9rem;
      height: 0.66rem;
      color: #ffffff;
      background-color: #b0674ddd;
      font-size: 0.26rem;
      border-radius: 0.33rem;
    }
  }
  .body {
    .mu-raised-button {
      display: block;
      margin: 0.8rem 2.54rem 0.6rem;
      min-width: 2.42rem;
      height: 0.86rem;
      color: #ffffff;
      background-color: #f73a50;
      font-size: 0.32rem;
      border-radius: 0.1rem;
    }
  }
}
</style>

