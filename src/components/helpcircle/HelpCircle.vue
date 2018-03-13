<template>
<div class="HelpCircle">
  <!-- 顶部的Toolbar部分 -->
  <mu-appbar class="title">
    <div class="appbar-left" slot="left">
      <h4>杭州</h4>
    </div>
    <img slot="right" src="../../assets/index/search.png" alt=""> 
    <mu-icon-menu icon="" slot="right">
      <mu-menu-item title="菜单 1"/>
      <mu-menu-item title="菜单 2"/>
      <mu-menu-item title="菜单 3"/>
      <mu-menu-item title="菜单 4"/>
      <mu-menu-item title="菜单 5"/>
    </mu-icon-menu>
  </mu-appbar>
  <mu-tabs  :value="activeTab" @change="handleTabChange">
    <mu-tab title="推荐" value="recommend"/>
    <mu-tab title="关注" value="attention"/>
    <mu-tab title="热点" value="hotpoints"/>
    <mu-tab title="附近" value="nearby"/>
    <mu-tab title="视频" value="video"/>
  </mu-tabs>
  <div class="tab-content" style=" position: relative;">
    <mu-refresh-control :refreshing="refreshing" :trigger="scroller" @refresh="getTopics" />
    <mu-list style="padding: 0;">
      <mu-list-item class="mu-list-item" @click="toSoftCopy">
        <div class="mu-item-content">
          <div class="mu-item-content-part1">
            <div class="head">
              <img src="../../assets/index/head.png" alt="">
            </div>
            <div class="content">
              <h2>MR凡先生</h2>
              <h3>12:55</h3>
            </div>
          </div>
          <div class="mu-item-content-part2">
            <h3>这个便签确实很棒棒，我在这家店买过三次了，值得信赖</h3>
          </div>
          <div class="mu-item-content-part3"  style="background-color: #f4f4f4;">
            <img src="../../assets/index/tag.png" alt="">
            <div class="content">
              <div class="head">
                <img src="../../assets/helpcircle/head.png" alt="">
                <div class="info">
                  <h2>Caubyyy</h2>
                  <h3>2017-12-1</h3>
                </div>
                <mu-raised-button>购买过</mu-raised-button>
              </div>
              <div class="body">
                <h2>帮友们~这款便签真的超赞的</h2>
                <p>时尚便签</p>
              </div>
              <div class="footer">
                <div class="support">
                  <img src="../../assets/helpcircle/support.png" alt="">
                  <p>46</p>
                </div>
                <div class="comment">
                  <img src="../../assets/helpcircle/comment.png" alt="">                      
                  <p>464</p>
                </div>
                <div class="transpond">
                  <img src="../../assets/helpcircle/transpond.png" alt="">                      
                  <p>46</p>
                </div>
              </div>
            </div>
          </div>              
        </div>
      </mu-list-item>
      <mu-list-item class="mu-list-item">
        <div class="mu-item-content">
          <div class="mu-item-content-part1">
            <div class="head">
              <img src="../../assets/index/head.png" alt="">
            </div>
            <div class="content">
              <h2>MR凡先生</h2>
              <h3>12:55</h3>
            </div>
          </div>
          <div class="mu-item-content-part2">
            <h3>这个笔记本确实很棒棒，我在这家店买过三次了，值得信赖</h3>
          </div>
          <div class="mu-item-content-part3"  style="background-color: #f4f4f4;">
            <img src="../../assets/index/notebook.png" alt="">
            <div class="content">
              <div class="head">
                <img src="../../assets/helpcircle/head.png" alt="">
                <div class="info">
                  <h2>Caubyyy</h2>
                  <h3>2017-12-1</h3>
                </div>
                <mu-raised-button>购买过</mu-raised-button>
              </div>
              <div class="body">
                <h2>帮友们~这款笔记本真的超赞的</h2>
                <p>时尚笔记本</p>
              </div>
              <div class="footer">
                <div class="support">
                  <img src="../../assets/helpcircle/support.png" alt="">
                  <p>46</p>
                </div>
                <div class="comment">
                  <img src="../../assets/helpcircle/comment.png" alt="">                      
                  <p>464</p>
                </div>
                <div class="transpond">
                  <img src="../../assets/helpcircle/transpond.png" alt="">                      
                  <p>46</p>
                </div>
              </div>
            </div>
          </div>              
        </div>
      </mu-list-item>
      <mu-list-item class="mu-list-item">
        <div class="mu-item-content">
          <div class="mu-item-content-part3">
            <img src="../../assets/index/teaport.png" alt="">
            <div class="content">
              <div class="head">
                <img src="../../assets/helpcircle/head.png" alt="">
                <div class="info">
                  <h2>Caubyyy</h2>
                  <h3>2017-12-1</h3>
                </div>
                <mu-raised-button style="background-color:#bfbfbf;">未购买</mu-raised-button>
              </div>
              <div class="body">
                <h2>帮友们~这款茶壶真的超赞的</h2>
                <p>时尚茶壶</p>
              </div>
              <div class="footer">
                <div class="support">
                  <img src="../../assets/helpcircle/support.png" alt="">
                  <p>46</p>
                </div>
                <div class="comment">
                  <img src="../../assets/helpcircle/comment.png" alt="">                      
                  <p>464</p>
                </div>
                <div class="transpond">
                  <img src="../../assets/helpcircle/transpond.png" alt="">                      
                  <p>46</p>
                </div>
              </div>
            </div>
          </div>              
        </div>
      </mu-list-item>
      <mu-list-item class="mu-list-item">
        <div class="mu-item-content">
          <div class="mu-item-content-part3">
            <img src="../../assets/index/clothes1.png" alt="">
            <div class="content">
              <div class="head">
                <img src="../../assets/helpcircle/head.png" alt="">
                <div class="info">
                  <h2>Caubyyy</h2>
                  <h3>2017-12-1</h3>
                </div>
                <mu-raised-button style="background-color:#bfbfbf;">未购买</mu-raised-button>
              </div>
              <div class="body">
                <h2>帮友们~这款衣服真的超赞的</h2>
                <p>时尚针织衫</p>
              </div>
              <div class="footer">
                <div class="support">
                  <img src="../../assets/helpcircle/support.png" alt="">
                  <p>46</p>
                </div>
                <div class="comment">
                  <img src="../../assets/helpcircle/comment.png" alt="">                      
                  <p>464</p>
                </div>
                <div class="transpond">
                  <img src="../../assets/helpcircle/transpond.png" alt="">                      
                  <p>46</p>
                </div>
              </div>
            </div>
          </div>              
        </div>
      </mu-list-item>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</div>
</template>

<script>
import {mapActions} from 'vuex';
import {Toast} from 'mint-ui';
export default {
  name: 'HelpCircle',
  data() {
    return {
      activeTab: 'recommend',
      refreshing: false,
      loading: false,
      scroller: null,
    };
  },
  methods: {
    ...mapActions([
      'indexTabbarHide'
    ]),
    handleTabChange(val) {
      this.activeTab = val;
    },
    getTopics() {
      this.refreshing = true;
      
      
      setTimeout(() => {
        this.refreshing = false;
      }, 2000);
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    toSoftCopy(){
      Toast('链接失效');
      //this.$router.push('softcopy');
      //this.indexTabbarHide();
    }
  },
  mounted() {
    //topLine样式
    let aNavLine = document.querySelector('.mu-tab-link-highlight');
    aNavLine.style.background = 'rgba(0,0,0,0)';
    aNavLine.innerHTML =
      '<i style="display:block;height:0.04rem;width:0.8rem;margin-left:0.35rem;background:#f73a50;"><i>';
    //修改所有mu-list-item的样式
    let aMuitem = document.querySelectorAll('.mu-item');
    for (let i = 0; i < aMuitem.length; i++) {
      aMuitem[i].style.padding = '0rem';
    }
    //
    this.scroller = this.$el;
    //上拉下拉刷新的color
    let aSpinner = document.querySelectorAll('.mu-circle-spinner');
    for (let i = 0; i < aSpinner.length; i++) {
      aSpinner[i].style.borderColor = '#f73a50';
    }
    //mu-ripple-wrapper
    let aWrapper = document.querySelectorAll('.mu-tab-link');
    
    for (let i = 0; i < aWrapper.length; i++) {
      aWrapper[i].children[0].children[0].style.marginTop = '0.14rem';
      aWrapper[i].children[0].children[0].style.height = '0.68rem';
    }
    
  },
};
</script>

<style lang="scss" scoped>
.title {
  position: fixed;
  top: 0;
  background-color: #f73a50;
  padding-bottom: 0.22rem;
  .appbar-left {
    h4 {
      align-items: center;
      font-size: 0.28rem;
      line-height: 0.28rem;
      color: #ffffff;
    }
    h4::before {
      content: '';
      width: 0.16rem;
      height: 0.16rem;
      transform: rotate(45deg);
      display: block;
      position: absolute;
      border: none;
      border-bottom: 0.03rem solid #ffffff;
      border-right: 0.03rem solid #ffffff;
      top: 0.34rem;
      left: 0.8rem;
    }
  }
  img {
    margin-left: 0.16rem;
    height: 0.58rem;
  }
  .mu-icon-menu {
    width: 0.88rem;
    height: 0.88rem;
    background-size: 0.44rem;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../../assets/helpcircle/more.png');
  }
}

.mu-tabs {
  position: fixed;
  border-top: 0.06rem solid #e4e4e4;
  border-bottom: 0.01rem solid #e4e4e4;
  top: 0.88rem;
  height: 0.75rem;
  background-color: #ffffff !important;
  .mu-tab-link {
    color: #999999;
  }
  .mu-tab-active {
    color: #333333;
  }
}

.tab-content {
  margin-top: 1.63rem;
  padding-bottom: 0.98rem;
  .mu-refresh-control{
    color:#f73a50;
  }
  .mu-infinite-scroll{
    color:#333333;
    .mu-circle-wrapper.active{
      color:#f73a50;
    }
  }
  .mu-circle{
    color:#f73a50;
  }
  .mu-item-content {
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
      padding: 0.25rem 0.2rem;
      display: flex;
      img {
        height: 2.3rem;
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
  .mu-list-item {
    border-bottom: 0.2rem solid #e4e4e4;
  }
  .mu-list-item:nth-last-of-type(1) {
    border-bottom: none;
  }
}
</style>
