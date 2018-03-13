<template>
  <div id="ShopCar">
    <!-- 顶部的Toolbar部分 -->
    <mu-appbar>
      <div class="appbar-title">
        <h4>购物车</h4>
      </div>
      <div class="appbar-right">
        <p>管理</p>
      </div>
    </mu-appbar>
    <div class="content">
      <dl>
        <dt>
          <input type="checkbox" id="aaa">
          <label for="aaa"></label>
          <p>耷拉眼河童</p>
          <img src="../../assets/shopcart/right.png" alt="">
        </dt>
        <dd>
          <input type="checkbox" id="bbb">
          <label for="bbb"></label>
          <img src="../../assets/shopcart/goods.jpg" alt="">
          <div class="goods-detail">
            <p>秋冬打底衬衫男长袖 小方领牛津修身韩版青年男衬衫</p>
            <button ref="button" @click="toggle">白色M</button>
            <mu-popover :trigger="trigger" :open="popOpen" @close="popHandleClose">
              <mu-menu>
                <mu-menu-item title="Refresh" />
                <mu-menu-item title="Send feedback" />
                <mu-menu-item title="Settings" />
                <mu-menu-item title="Help" />
                <mu-menu-item title="Sign out" />
              </mu-menu>
            </mu-popover>
            <div class="goods-number">
              <em></em>
              <p>1</p>
              <i></i>
            </div>
          </div>
        </dd>
        <dd>
          <input type="checkbox" id="ccc">
          <label for="ccc"></label>
          <img src="../../assets/shopcart/goods.jpg" alt="">
          <div class="goods-detail">
            <p>秋冬打底衬衫男长袖 小方领牛津修身韩版青年男衬衫</p>
            <button ref="button" @click="toggle">白色M</button>
            <mu-popover :trigger="trigger" :open="popOpen" @close="popHandleClose">
              <mu-menu>
                <mu-menu-item title="Refresh" />
                <mu-menu-item title="Send feedback" />
                <mu-menu-item title="Settings" />
                <mu-menu-item title="Help" />
                <mu-menu-item title="Sign out" />
              </mu-menu>
            </mu-popover>
            <div class="goods-number">
              <em></em>
              <p>1</p>
              <i></i>
            </div>
          </div>
        </dd>
      </dl>
    </div>  
  </div>
</template>
  
<script>
export default {
  name: 'ShopCar',
  data() {
    return {
      rightTop: {horizontal: 'right', vertical: 'top'},
      open: true,
      list: [],
      popOpen: false,
      trigger: null
    };
  },
  methods: {
    handleOpen() {
      this.open = true;
    },
    handleClose() {
      this.open = false;
    },
    toggle(){
      this.popOpen = !this.popOpen;
    },
    popHandleClose(e){
      this.open = false;
    }
  },
  mounted () {
    this.trigger = this.$refs.button.$el;
  }
};
</script>

<style lang="scss" scoped>
.mu-appbar {
  position: fixed;
  height: 0.98rem;
  top: 0;
  background-color: #f73a50;
  border-bottom: 0.1rem solid #ececec;
  box-shadow: none;
  padding: 0;
  .appbar-right {
    p {
      position: absolute;
      top: 0;
      right: -0.6rem;
      font-size: 0.32rem;
      line-height: 0.88rem;
      color: #ffffff;
      margin-right: 1rem;
    }
  }
  .appbar-title {
    h4 {
      text-align: center;
      font-size: 0.38rem;
      line-height: 0.88rem;
      color: #ffffff;
    }
  }
}
.content {
  margin-top: 0.98rem;
  dl {
    margin: 0;
    dt {
      display: flex;
      height: 0.75rem;
      padding: 0 0.2rem;
      position: relative;
      border-bottom: 0.01rem solid #f4f4f4;
      input[type='checkbox'] {
        opacity: 0;
      }
      label {
        position: absolute;
        left: 0.2rem;
        top: 0.175rem;
        width: 0.4rem;
        height: 0.4rem;
        border: 0.03rem solid #dad8da;
        border-radius: 0.2rem;
      }
      input:checked + label {
        background-color: #f73a50;
        border: none;
      }
      input:checked + label::after {
        position: absolute;
        content: '';
        width: 0.15rem;
        height: 0.25rem;
        top: 0.05rem;
        left: 0.12rem;
        border: 0.04rem solid #ffffff;
        border-top: none;
        border-left: none;
        transform: rotate(45deg);
      }
      p {
        margin: 0 0.2rem 0 0.26rem;
        font-size: 0.28rem;
        line-height: 0.74rem;
        color: #666666;
      }
      img {
        margin: 0.28rem 0;
        height: 0.18rem;
      }
    }
    dd {
      position: relative;
      display: flex;
      padding: 0 0.2rem;
      height: 2.33rem;
      border-bottom: 0.2rem solid #f4f4f4;
      input[type='checkbox'] {
        opacity: 0;
      }
      label {
        position: absolute;
        left: 0.2rem;
        top: 0.865rem;
        width: 0.4rem;
        height: 0.4rem;
        border: 0.03rem solid #dad8da;
        border-radius: 0.2rem;
      }
      input:checked + label {
        background-color: #f73a50;
        border: none;
      }
      input:checked + label::after {
        position: absolute;
        content: '';
        width: 0.15rem;
        height: 0.25rem;
        top: 0.05rem;
        left: 0.12rem;
        border: 0.04rem solid #ffffff;
        border-top: none;
        border-left: none;
        transform: rotate(45deg);
      }
      img {
        height: 1.85rem;
        margin: 0.14rem 0.18rem;
      }
      .goods-detail {
        margin: 0.2rem 0.37rem 0.12rem 0.15rem;
        p {
          line-height: 0.34rem;
          font-size: 0.24rem;
          color: 333333;
        }
        button {
          position: relative;
          width: 4.1rem;
          height: 0.4rem;
          background-color: #f4f4f4;
          font-size: 0.24rem;
          line-height: 0.4rem;
          margin-top: 0.1rem;
          color: #666666;
        }
        button::before {
          content: '';
          position: absolute;
          width: 0.15rem;
          height: 0.15rem;
          top: 0.08rem;
          right: 0.2rem;
          border: 0.04rem solid #bfbfbf;
          border-top: none;
          border-left: none;
          transform: rotate(45deg);
        }
        .goods-number {
          display: flex;
          margin-top: 0.15rem;
          em {
            position: relative;
            width: 0.4rem;
            height: 0.4rem;
            border: 0.01rem solid #bfbfbf;
            font-size: 0.2rem;
            text-align: center;
          }
          em::before {
            content: '';
            position: absolute;
            width: 0.2rem;
            height: 0.02rem;
            top: 0.18rem;
            left: 0.09rem;
            background-color: #bfbfbf;
          }
          p {
            width: 3.1rem;
            height: 0.4rem;
            border: 0.01rem solid #bfbfbf;
            font-size: 0.24rem;
            color: #666666;
            text-align: center;
            margin: 0 0.1rem 0 0.1rem;
          }
          i {
            position: relative;
            width: 0.4rem;
            height: 0.4rem;
            border: 0.01rem solid #bfbfbf;
            font-size: 0.2rem;
            text-align: center;
          }
          i::before {
            content: '';
            position: absolute;
            width: 0.2rem;
            height: 0.02rem;
            top: 0.18rem;
            left: 0.09rem;
            background-color: #bfbfbf;
          }
          i::after {
            content: '';
            position: absolute;
            width: 0.2rem;
            height: 0.02rem;
            top: 0.18rem;
            left: 0.09rem;
            background-color: #bfbfbf;
            transform: rotate(90deg);
          }
        }
      }
    }
  }
}
</style>


