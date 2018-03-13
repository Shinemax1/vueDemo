<template>
  <div id="MyAttention">
    <Appbar title="我的关注" type="1"/>
    <div class="content">
      <Listview margin="0.88rem">
        <div slot="content" v-for="(item,index) in follwerlist" :key="index">
          <mu-list-item>
            <div class="mu-item-content">
              <img v-if="item.userHeadPortrait" :src="item.userHeadPortrait" alt="">
              <img v-else src="../../assets/mine/minebbang/minedistribution/head.png" alt="">
              <div class="father">
                <h2>{{item.userName}}</h2>
                <div class="children">
                  <h2>181个代言商品</h2>
                  <h3>12.2万个粉丝</h3>
                </div>
              </div>
              <mu-raised-button class="mu-raised-button-false" @click="">关注</mu-raised-button>
            </div>
          </mu-list-item>
          <!-- <mu-list-item>
            <div class="mu-item-content">
              <img src="../../assets/mine/minebbang/minedistribution/head.png" alt="">
              <div class="father">
                <h2>爱如探汤</h2>
                <div class="children">
                  <h2>181个代言商品</h2>
                  <h3>12.2万个粉丝</h3>
                </div>
              </div>
              <mu-raised-button class="mu-raised-button-false">关注</mu-raised-button>
            </div>
          </mu-list-item>
          <mu-list-item>
            <div class="mu-item-content">
              <img src="../../assets/mine/minebbang/minedistribution/head.png" alt="">
              <div class="father">
                <h2>爱如探汤</h2>
                <div class="children">
                  <h2>181个代言商品</h2>
                  <h3>12.2万个粉丝</h3>
                </div>
              </div>
              <mu-raised-button class="mu-raised-button-true">已关注</mu-raised-button>
            </div>
          </mu-list-item>
          <mu-list-item>
            <div class="mu-item-content">
              <img src="../../assets/mine/minebbang/minedistribution/head.png" alt="">
              <div class="father">
                <h2>爱如探汤</h2>
                <div class="children">
                  <h2>181个代言商品</h2>
                  <h3>12.2万个粉丝</h3>
                </div>
              </div>
              <mu-raised-button class="mu-raised-button-true">相互关注</mu-raised-button>
            </div>
          </mu-list-item>     -->
        </div>
      </Listview>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'MyAttention',
  data() {
    return {
      pageNo: 1,
      follwerlist: [],
    };
  },
  computed: {
    ...mapGetters(['userId']),
  },
  methods: {
    ...mapActions(['getfollowerlist', 'follow']),
  },     
  mounted() {
    
  },
  created() {
    this.getfollowerlist({
      data: {
        userId: this.userId,
        pageNo: this.pageNo,
        pageSize: 10,
      },
      success: data => {
        this.follwerlist = data;
      },
    });

    // this.follow({
    //   data: {
    //     userId: this.userId,
    //     followerId: '2c931019611bf13b01611c0e9ecd0005'
    //   },
    //   success:()=>{

    //   }
    // });
  },
};
</script>

<style lang="scss" scoped>
.content {
  .mu-item-content {
    margin: 0;
    padding: 0.16rem 0.3rem;
    display: flex;
    height: 1.21rem;
    border-bottom: 0.01rem solid #e4e4e4;
    img {
      height: 0.89rem;
    }
    .father {
      width: 4.56rem;
      margin-left: 0.25rem;
      > h2 {
        display: inline-block;
        position: relative;
        font-size: 0.28rem;
        line-height: 0.5rem;
        color: #333333;
      }
      > h2::before {
        position: absolute;
        content: '';
        background-image: url(../../assets/mine/attention.png);
        background-size: 0.28rem 0.25rem;
        width: 0.28rem;
        height: 0.25rem;
        top: 0.1rem;
        right: -0.4rem;
      }
      .children {
        display: flex;
        h2,
        h3 {
          font-size: 0.24rem;
          line-height: 0.42rem;
          color: #8f8f8f;
        }
        h2 {
          width: 1.9rem;
        }
      }
    }
    .mu-raised-button-false {
      display: block;
      margin: auto 0;
      min-width: 1.2rem;
      padding-left: 0.4rem;
      height: 0.48rem;
      color: #ffffff;
      background-color: #f73a50;
      font-size: 0.25rem;
      border-radius: 0.04rem;
    }
    .mu-raised-button-false::before {
      content: '';
      width: 0.25rem;
      height: 0.02rem;
      transform: rotate(0deg);
      display: block;
      background: #ffffff;
      position: absolute;
      top: 0.22rem;
      left: 0.202rem;
    }
    .mu-raised-button-false::after {
      content: '';
      width: 0.25rem;
      height: 0.02rem;
      transform: rotate(90deg);
      display: block;
      background: #ffffff;
      position: absolute;
      top: 0.22rem;
      left: 0.202rem;
    }
    .mu-raised-button-true {
      display: block;
      margin: auto 0;
      min-width: 1.2rem;
      height: 0.48rem;
      color: #ffffff;
      background-color: #bfbfbf;
      font-size: 0.25rem;
      border-radius: 0.04rem;
    }
  }
}
</style>


