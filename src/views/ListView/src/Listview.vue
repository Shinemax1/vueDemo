<template>
  <div class="tab-content" style=" position: relative;" :style="{marginTop:margin}">
    <mu-refresh-control :refreshing="refreshing" :trigger="scroller" @refresh="getTopics" />
    <mu-list style="padding: 0;">
      <slot ref="el" name="content">
          <!-- <mu-list-item class="mu-list-item">
        <slot name="a">
            
        </slot>
      </mu-list-item> -->
        <!-- <h2>无内容</h2> -->
      </slot>
      
    </mu-list>
    <mu-infinite-scroll  :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>

<script>
export default {
  name: 'Listview',
  props: ['margin'],
  data() {
    return {
      refreshing: false,
      loading: false,
      scroller: null,
    };
  },
  methods: {
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
  },
  updated () {
    //修改所有mu-list-item的样式
    let aMuitem = document.querySelectorAll('.mu-item');
    for (let i = 0; i < aMuitem.length; i++) {
      aMuitem[i].style.padding = '0rem';
    }
  },
  mounted() {
    this.scroller = this.$el;
    //上拉下拉刷新的color
    let aSpinner = document.querySelectorAll('.mu-circle-spinner');
    for (let i = 0; i < aSpinner.length; i++) {
      aSpinner[i].style.borderColor = '#f73a50';
    }

    

    // let aa = document.querySelector('.mu-ripple-wrapper');
    // aa.style.display = 'none';
  }
};
</script>

<style lang="scss" scoped>
.tab-content {
  .mu-item{
    padding: 0rem;
  }
  //padding-bottom: 0.98rem;
  .mu-refresh-control {
    //margin-top: -0.4rem;
    color: #f73a50;
  }
  .mu-infinite-scroll {
    color: #333333;
    .mu-circle-wrapper.active {
      color: #f73a50;
    }
  }
  .mu-circle {
    color: #f73a50;
  }
  .mu-list-item {
    border-bottom: 0.2rem solid #e4e4e4;
    padding: 0rem;
    h2 {
      width: 100%;
      line-height: 7.5rem;
      text-align: center;
      //align-items: center;
    }
  }
  .mu-list-item:nth-last-of-type(1) {
    border-bottom: none;
  }
}
</style>


