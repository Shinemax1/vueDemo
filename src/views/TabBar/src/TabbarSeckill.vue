<template>
  <div class="tabs" ref="tabs">
      <div class="p1" ref="tab">
        <div v-for="(item, index) in tabData" :key="index">
          <span :class="currentPage == index?'p-select':''" @click="changeTab(index)">
            <h2>{{item.time}}</h2>
            <p>{{item.content}}</p>
          </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TabbarSeckill',
  props: ['tabData', 'func'],
  data() {
    return {
      currentPage: '0',
    };
  },
  methods: {
    changeTab(index) {
      this.currentPage = index;
      this.func(index);
    },
    over() {
      let tabs = this.$refs.tabs;
      tabs.style.position = 'relative';
      //tabs.style.marginTop = '0.88rem';
      //tabs.style.top = '0.88rem';
    },
    out() {
      let tabs = this.$refs.tabs;
      tabs.style.position = 'fixed';
      //tabs.style.top = '0.88rem';
      //tabs.style.marginTop = '0rem';
    },
  },
  mounted() {
    let tab = this.$refs.tab;
    //let tabs = this.$refs.tabs;
    tab.style.width = this.tabData.length * 1.8 + 'rem';
    //tabs.scrollLeft('200');
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  position: fixed;
  top: 0.88rem;
  //margin-top: 0.88rem;
  height: 1rem;
  width: 7.5rem;
  background-color: #f47d8f;
  overflow-y: scroll;
  z-index: 9898989898;
  .p1 {
    span {
      height: 1rem;
      padding: 0.15rem;
      float: left;
      width: 1.8rem;
      text-align: center;
      h2 {
        color: #ffffff;
        line-height: 0.4rem;
        font-size: 0.32rem;
        //text-align: center;
      }
      p {
        color: #ffffff;
        line-height: 0.42rem;
        font-size: 0.24rem;
        //text-align: center;
      }
    }
    .p-select {
      background-color: #f73a50;
    }
  }
}
.tabs::-webkit-scrollbar {
  display: none;
}
</style>


