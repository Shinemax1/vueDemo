<template>
  <div id="SearchRepresent">
    <Appbar title="软文搜索" type="1"/>
    <div id="container">
      <div id="go-search">
        <div id="search">
          <input type="text" placeholder="爸爸的小棉袄" v-model="words">
          <button @click="finish">取消</button>
        </div>
      </div>
      <ul id="go-list" v-for="(items, index) in productInfo" :key="index">
        <li>
          <div id="con-goods">
            <div>
              <img :src="'http://47.100.119.217:8080/webound/'+items.productImage.split(',')[0]" alt="">
            </div>
            <div>
              <h3>{{items.productName}}</h3>
              <h5>{{items.productCategory}}</h5>
            </div>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'SearchRepresent',
  data () {
    return {
      productInfo: [],
      seen: true,
      okay: true,
      words: '',
      pageSize: 10,
      pageNo: 1,
      product:{}
    }
  },
  methods: {
    ...mapActions([
     'getProductInfoByName'
    ]),
    finish(){
      this.words = '';
    }
  },
  watch: {
    words(curVal,oldVal){
      if (curVal.replace(/\s+/g, '') == oldVal.replace(/\s+/g, '')) {
        return;
      }
      this.getProductInfoByName({
        data: {
          words: curVal,
          pageSize: this.pageSize,
          pageNo: this.pageNo,
        },
        success: (data) => {
          this.productInfo = data;
        },
      });
    }
  }
}
</script>

<style lang="scss" scoped>
#container {
  margin-top: 0.88rem;
  width: 100%;
  height: 100%;
}
#go-search {
  width: 100%;
  height: 0.9rem;
  padding: 0.15rem 0.2rem;
  border-bottom: 0.02rem solid #bfbfbf;
}
#search {
  width: 100%;
  height: 0.6rem;
  input {
    width: 6.2rem;
    height: 0.6rem;
    background-color: #f5f5f5;
    float: left;
    border-radius: 0.6rem;
    font-size: 0.25rem;
    padding-left: 0.6rem;
  }
  button {
    background: none;
    height: 0.6rem;
    font-size: 0.3rem;
    color: #f73a50;
    font-weight: 400;
    line-height: 0.6rem;
    float: right;
    padding: 0;
    margin-right: 0.1rem;
    text-align: center;
  }
}
#go-list {
  width: 100%;
  height: 1.65rem;
  padding: 0 0.13rem;
  //margin: 0.2rem;
  li {
    width: 100%;
    height: 100%;
    padding: 0.1rem;
    box-sizing: border-box;
  }
  .check {
    width: 0.42rem;
    height: 100%;
    vertical-align: center;
    display: inline-block;
    float: left;

    input {
      position: absolute;
      opacity: 0;
    }
    label {
      height: 1.2rem;
      width: 100%;
      display: block;
      position: relative;
    }
    label::before {
      content: '';
      height: 0.4rem;
      width: 0.4rem;
      // background-color: green;
      position: absolute;
      right: 0;
      top: 0.5rem;
      border: 0.01rem solid #dddddd;
      border-radius: 50%;
      box-shadow: border-box;
    }
    input:checked + label::after {
      content: '';
      position: absolute;
      top: 0.5rem;
      left: 0.02rem;
      background: url(../../assets/represent/Goods_select.png) no-repeat;
      background-size: 0.4rem 0.4rem;
      width: 0.4rem;
      height: 0.4rem;
      // border: 0.01rem solid #bfbfbf;
      border-radius: 50%;
      // right: 0.07rem;
      // top: 0.45rem;
      // width: 0.3rem;
      // height: 0.2rem;
      // border-bottom: 0.04rem solid #fc452b;
      // border-left: 0.04rem solid #fc452b;
      // transform: rotate(-45deg);
    }
    // input {
    //   width: 100%;
    //   height: 100%;
    //   background-color: #f73a50;
    //   border-radius: 50%;
    // }
  }
  #con-goods {
    width: 7rem;
    height: 100%;
    //padding-top: 0.17rem;
    //float: left;
    //margin-left: 0.1rem;
    background-color: #f4f4f4;
    img {
      margin: 0.2rem;
      width: 1rem;
      height: 1rem;
      float: left;
    }
    h3 {
      margin-top: 0.15rem;
      width: 4.8rem;
      font-size: 0.3rem;
      line-height: 0.55rem;
      color: #000;
      text-align: left;
      float: left;
    }
    h5 {
      width: 4.8rem;
      font-size: 0.25rem;
      line-height: 0.65rem;
      color: #bfbfbf;
      text-align: left;
      float: left;
    }
  }
}
</style>


