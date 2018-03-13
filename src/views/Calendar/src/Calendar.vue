<template>
  <div id="Calendar">
    <div class="top">
      <h2 @click="openPicker()">{{changeDate}}</h2>
      <h3>你已签到<span>{{allAmount}}</span>天&nbsp;&nbsp;|&nbsp;&nbsp;连续签到<span>{{continueAmount}}</span>天</h3>
    </div>
    <div class="title">
      <h2>日</h2>
      <h2>一</h2>
      <h2>二</h2>
      <h2>三</h2>
      <h2>四</h2>
      <h2>五</h2>
      <h2>六</h2>
    </div>
    <div class="content">
      <ul ref="content">
        <li  v-for="(item,index) in date" :key="index" >
          <h2>{{item}}</h2>
        </li>
      </ul>
    </div>
    <!-- 时间选择器 -->
    <mt-datetime-picker
      ref="picker2"
      type="date"
      v-model="day"
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
import {DatePicker} from 'mint-ui';
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'Calendar',
  props: ['signDay', 'allAmount', 'continueAmount'],
  data() {
    return {
      year: '2006-8',
      date: [],
      signDate: [],
      today: '',
      startDate: new Date('2017'),
      endDate: new Date(),
      day: new Date(),
      firstdayWeek: 1
    };
  },
  computed: {
    ...mapGetters(['userId']),
    changeDate() {
      if (this.day) {
        return (
          new Date(this.day).getFullYear() +
          '-' +
          (new Date(this.day).getMonth() + 1)
        );
      } else {
        return '';
      }
    },
  },
  methods: {
    ...mapActions(['getSign']),
    countDay(oDate) {
      this.date = [];
      let m_days = new Array(
        31,
        28 + is_leap(oYear),
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
        30,
        31
      );
      function is_leap(year) {
        return year % 100 == 0
          ? year % 400 == 0 ? 1 : 0
          : year % 4 == 0 ? 1 : 0;
      }
      let oYear = oDate.getFullYear();
      let oMonth = oDate.getMonth();
      let oMonthday = m_days[oDate.getMonth()];
      let firstday = new Date(oYear, oMonth, 1);
      this.firstdayWeek = firstday.getDay();
      this.today = new Date().getDate();
      for (let j = 0; j < this.firstdayWeek; j++) {
        this.date.push('');
      }
      for (let i = 1; i < oMonthday + 1; i++) {
        this.date.push(i);
      }
    },
    openPicker() {
      this.$refs.picker2.open();
    },
  },
  watch: {
    signDay(curVal, oldVal) {
      this.day = new Date();
    },
    day(curVal, oldVal) {
      let oDate = new Date(curVal);
      let date = oDate.getFullYear() + '-' + (oDate.getMonth() + 1);
      //辣鸡datepicker
      if (oDate.getFullYear() == this.endDate.getFullYear()&&oDate.getMonth() > this.endDate.getMonth()) {
        return;
      }
      this.countDay(oDate);
      this.getSign({
        data: {
          userId: this.userId,
          date: date,
        },
        success: data => {
          let a = this.$refs.content.children;
          for (let i = 0; i < a.length; i++) {
            a[i].children[0].classList.remove('signed');
            a[i].children[0].classList.remove('daysigned');
          }
          if (
            this.changeDate ==
            this.endDate.getFullYear() + '-' + (this.endDate.getMonth() + 1)
          ) {
            a[this.today+this.firstdayWeek-1].children[0].classList.add('daysigned');
          } else {
            a[this.today+this.firstdayWeek-1].children[0].classList.remove('daysigned');
          }
          if (data.dates.length > 0) {
            for (let m = 0; m < data.dates.length; m++) {
              if (data.dates[m] == this.today) {
                a[this.today+this.firstdayWeek-1].children[0].classList.remove('daysigned');
              }
              a[Number(data.dates[m])+this.firstdayWeek-1].children[0].classList.add('signed');
            }
          }
        },
      });
    },
  }
};
</script>

<style lang="scss" scoped>
#Calendar {
}
.top {
  padding: 0 0.2rem;
  height: 0.88rem;
  width: 100%;
  h2 {
    text-align: center;
    width: 2.42rem;
    float: left;
    line-height: 0.88rem;
    font-size: 0.32rem;
    color: #333333;
    position: relative;
  }
  h2::before {
    content: '';
    position: absolute;
    width: 0.15rem;
    height: 0.15rem;
    top: 0.3rem;
    right: 0.2rem;
    border: 0.02rem solid #333333;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
  }
  h3 {
    padding-right: 0.2rem;
    float: right;
    line-height: 0.88rem;
    font-size: 0.28rem;
    color: #333333;
  }
  span {
    line-height: 0.88rem;
    font-size: 0.28rem;
    color: #f73a50;
  }
}

.title {
  padding: 0 0.2rem;
  background-color: #f4f4f4;
  height: 0.89rem;
  width: 7.5rem;
  display: flex;
  h2 {
    width: 1rem;
    font-size: 0.32rem;
    line-height: 0.89rem;
    text-align: center;
    color: #333333;
  }
}
.content {
  padding: 0 0.2rem;
  width: 7.5rem;
  ul {
    //margin-left: 0.2rem;
    overflow: hidden;
    li {
      float: left;
      margin: 0;
      width: 1rem;
      height: 1rem;
      h2 {
        margin: 0.2rem auto;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 0.3rem;
        color: #333333;
        text-align: center;
        font-weight: 400;
        font-size: 0.32rem;
        line-height: 0.58rem;
        background-color: #ffffff;
      }
      .signed {
        background-color: #f73a50;
        color: #ffffff;
      }
      .daysigned {
        border: 0.01rem solid #f73a50;
        background-color: #ffffff;
        color: #333333;
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

