<template>
  <div id="Vagetable">
    <Appbar title="农副产品" type="1"/>
    <div class="details">
      <div class="part1">
        <ul>
          <li>
            <img src="../../../assets/index/vagetable/boluo.png" alt="">
            <h2>新鲜瓜果</h2>
          </li>
          <li>
            <img src="../../../assets/index/vagetable/lajiao.png" alt="">
            <h2>新鲜蔬菜</h2>
          </li>
          <li>
            <img src="../../../assets/index/vagetable/xia.png" alt="">
            <h2>鲜美海产</h2>
          </li>
          <li>
            <img src="../../../assets/index/vagetable/mifan.png" alt="">
            <h2>香甜美食</h2>
          </li>
        </ul>
      </div>
      <div class="part2">
        <ul>
          <li>
            <p><span>全部<img src="../../../assets/index/fashion/arrow-down.png" alt=""></span></p>
          </li>
          <li>
            <p><span>附近<img src="../../../assets/index/fashion/arrow-down.png" alt=""></span></p>
          </li>
          <li>
            <p><span>智能排序<img src="../../../assets/index/fashion/arrow-down.png" alt=""></span></p>
          </li>
          <li>
            <p><span>筛选<img src="../../../assets/index/fashion/arrow-down.png" alt=""></span></p>
          </li>
        </ul>
      </div>
      <Listview>
        <div slot="content" v-for="(item,index) in mediaContentList" :key="index">
          <mu-list-item class="mu-list-item" @click="toDetail(item)">
            <div class="part3">
              <div class="mu-item-content-part3">
                <div class="img"><img :src="item.mediaCover" alt=""></div>
                <div class="content">
                  <div class="head">
                    <img :src="item.userInfoEntity.userHeadPortrait" alt="">
                    <div class="info">
                      <h2>{{item.userInfoEntity.userName}}</h2>
                      <h3>{{item.userInfoEntity.userBirthday}}</h3>
                    </div>
                    <mu-raised-button style="background-color:#bfbfbf;" v-if="!item.haveBought">未购买</mu-raised-button>
                    <mu-raised-button v-else>购买过</mu-raised-button>
                  </div>
                  <div class="body">
                    <h2>{{item.mediaContent}}</h2>
                    <p>{{item.productsInfoEntity.productName}}</p>
                  </div>
                  <div class="footer">
                    <div class="support">
                      <img src="../../../assets/helpcircle/support.png" alt="">
                      <p>{{item.likeNum}}</p>
                    </div>
                    <div class="comment">
                      <img src="../../../assets/helpcircle/comment.png" alt="">                      
                      <p>{{item.discussNum}}</p>
                    </div>
                    <div class="transpond">
                      <img src="../../../assets/helpcircle/transpond.png" alt="">                      
                      <p>{{item.forwardNum}}</p>
                    </div>
                  </div>
                </div>
              </div>              
            </div>
          </mu-list-item>
        </div>
      </Listview>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'Vegetable',
  data() {
    return {
      pageNo: 1,
      pageSize: 10,
      select: '',
      location: '',
      mediaContentList: [],
    };
  },
  computed: {
    ...mapGetters(['userId']),
  },
  methods: {
    ...mapActions(['getMediaContent']),
    toDetail(data){
      this.$store.state.represent.mediaContentEntity = data;
      this.$router.push({
        name: 'softcopy'
      });
    }
  },
  created() {
    this.getMediaContent({
      data: {
        categoryId: 'c8fffdfcfcc911e7950f2cb8184d3d4a',
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        select: this.select,
        location: this.location,
        title: '',
        userId: this.userId
      },
      success: data => {
        this.mediaContentList = data;
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.details {
  margin-top: 0.88rem;
  .part1 {
    width: 100%;
    height: 1.98rem;
    border-bottom: 0.2rem solid #f4f4f4;
    ul {
      display: flex;
      li {
        width: 1.92rem;
        margin: 0;
        border-right: 0.01rem solid #f4f4f4;
        img {
          height: 0.69rem;
          margin: 0.25rem auto 0;
        }
        h2 {
          line-height: 0.84rem;
          font-size: 0.28rem;
          color: #333333;
          text-align: center;
          width: 100%;
        }
      }
      li:nth-last-of-type(1) {
        border: none;
      }
    }
  }
  .part2 {
    width: 100%;
    height: 0.88rem;
    border-bottom: 0.01rem solid #f4f4f4;
    ul {
      display: flex;
      li {
        height: 0.5rem;
        width: 1.92rem;
        margin: 0.2rem 0;
        border-right: 0.01rem solid #f4f4f4;
        p {
          width: 100%;
          text-align: center;
          line-height: 0.5rem;
          font-size: 0.28rem;
          color: #888888;
          span {
            position: relative;
            img {
              height: 0.1rem;
              position: absolute;
              top: 0.15rem;
              right: -0.3rem;
            }
          }
        }
      }
      li:nth-last-of-type(1) {
        border: none;
      }
    }
  }
  .mu-list-item {
    border-bottom: 0.2rem solid #e4e4e4;
  }
  .mu-list-item:nth-last-of-type(1) {
    //border-bottom: none;
  }
  .part3 {
    .mu-item-content-part1 {
      margin-top: 0.17rem;
      display: flex;
      .head {
        width: 1.08rem;
        height: 0.86rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 0.66rem;
        }
      }
      .content {
        width: 4.52rem;
        h2 {
          font-weight: 350;
          align-items: center;
          line-height: 0.45rem;
          font-size: 0.32rem;
          color: #333333;
        }
        h3 {
          align-items: center;
          line-height: 0.41rem;
          font-size: 0.24rem;
          color: #666666;
        }
      }
    }
    .mu-item-content-part2 {
      padding: 0rem 0.17rem 0.08rem;
      h3 {
        line-height: 0.48rem;
        font-size: 0.32rem;
        color: #333333;
      }
    }
    .mu-item-content-part3 {
      padding: 0.25rem 0.03rem 0.25rem 0.2rem;
      display: flex;
      .img {
        width: 3rem;
        height: 2.3rem;
        justify-content: center;
        align-items: center;
        display: flex;
        overflow: hidden;
        img {
          max-width: 2.3rem;
          max-height: 2.3rem;
        }
      }
      .content {
        padding-left: 0.36rem;
        .head {
          display: flex;
          img {
            height: 0.7rem;
          }
          .info {
            width: 2.67rem;
            padding-left: 0.17rem;
            h2 {
              line-height: 0.38rem;
              font-size: 0.32rem;
              color: #333333;
              font-weight: 350;
              margin-bottom: 0.1rem;
            }
            h3 {
              line-height: 0.22rem;
              font-size: 0.24rem;
              color: #b2b2b2;
              font-weight: 350;
            }
          }
          .mu-raised-button {
            margin: auto 0;
            padding: 0;
            min-width: 1rem;
            height: 0.44rem;
            border-radius: 0.08rem;
            background-color: #f73a50;
            color: #ffffff;
            font-size: 0.28rem;
            line-height: 0.44rem;
          }
        }
        .body {
          padding: 0 0.06rem;
          h2 {
            overflow: hidden;
            width: 3.7rem;
            line-height: 0.7rem;
            color: #4d4d4d;
            font-size: 0.32rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: 520;
            border-bottom: 0.01rem solid #e4e4e4;
          }
          p {
            width: 3.7rem;
            line-height: 0.6rem;
            color: #666666;
            font-size: 0.28rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .footer {
          display: flex;
          position: relative;
          .support {
            display: flex;
            img {
              height: 0.33rem;
            }
            p {
              width: 1.18rem;
              font-size: 0.32rem;
              line-height: 0.38rem;
              color: #666666;
              margin-left: 0.15rem;
            }
          }
          .comment {
            display: flex;
            img {
              height: 0.33rem;
            }
            p {
              width: 1.5rem;
              font-size: 0.32rem;
              line-height: 0.38rem;
              color: #666666;
              margin-left: 0.15rem;
            }
          }
          .transpond {
            display: flex;
            img {
              height: 0.31rem;
            }
            p {
              width: 1.63rem;
              font-size: 0.32rem;
              line-height: 0.38rem;
              color: #666666;
              padding-left: 0.2rem;
            }
          }
        }
      }
    }
  }
}
</style>


