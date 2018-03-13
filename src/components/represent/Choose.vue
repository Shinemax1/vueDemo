<template>
  <div id="Choose">
    <Appbar title="发布推文" right="发送" type="1" :rightClick="send" isClick="true"/>
    <div id='container'>
      <div id="goods">
        <div class="con-goods clear" v-if="productInfo.productName">
          <div>
            <img :src="'http://47.100.119.217:8080/webound/'+productInfo.productImage.split(',')[0]" alt="">
          </div>
          <div>
            <h3>{{productInfo.productName}}</h3>
            <h5>{{productInfo.productCategory}}</h5>
          </div>
        </div>
        <div id="ch-add" @click="Goods" v-else>
          <p>添加商品</p>
        </div>
        <div class="cover" v-if="head">
          <img :src="head" alt="">
          <input @change="addPhoto" id="file" type="file" accept="image/*">
        </div>
        <div id="ch-cover" v-else>
          <p>添加封面</p>
          <input @change="addPhoto" id="file" type="file" accept="image/*">
        </div>
      </div>
      <div id="intro">
        <div id="title">
          <input type="text" name="" placeholder="标题" maxlength="20" v-model="title">
        </div>
        <div id="article">
          <!-- <input type="text" name="" placeholder="正文"> -->
          <textarea name=""  wrap="nowrap" id="" cols="30" rows="10" placeholder="正文" v-model="content"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'Choose',
  data() {
    return {
      productInfo: {a: '1'},
      head: '',
      title: '',
      content: ''
    };
  },
  computed: {
    ...mapGetters(['productinfo','userId']),
  },
  methods: {
    ...mapActions(['changeProduct','saveMediaContent','indexTabbarShow']),
    Goods() {
      this.$router.push('goods');
    },
    send(){
      this.saveMediaContent({
        data: {
          mediaUserId: this.userId,
          mediaProductId: this.productInfo.id,
          productCategoryId: this.productInfo.categoryId,
          mediaTitle: this.title,
          mediaCover: this.head,
          mediaContent: this.content,
          mediaLevel: 1
        },
        success:()=>{
          this.$router.go(-1);
          this.indexTabbarShow();
        }
      });
    },
    addPhoto() {
      const imgs = document.querySelector('#file').files;
      let self = this;
      if (imgs.length === 0) return;
      lrz(imgs[0], {quality: 0.4})
        .then(function(rst) {
          // 处理成功会执行
          self.head = rst.base64;
        })
        .catch(function(err) {
          // 处理失败会执行
        })
        .always(function() {
          // 不管是成功失败，都会执行
        });
    },
  },
  //生命周期
  beforeCreate() {},
  created() {
    this.productInfo = this.productinfo;
  },
  beforeMount() {},
  mounted() {},
  beforeDestroy() {
    this.changeProduct('');
  },
  destroyed() {},
  activated() {},
};
</script>
<style lang="scss" scoped>
#container {
  margin-top: 0.88rem;
  width: 100%;
  height: 100%;
}
// #title{
//   width:100%;
//   height: 0.9rem;
//   padding:0 0.2rem;
//   border-bottom: 0.01rem solid #bfbfbf;
// }
// #title:before{
//   content: '';
//   position: absolute;
//   display: block;
//   top:0.25rem;
//   left:0.2rem;
//   border:0.05rem solid #000;
//   border-radius: 0.03rem;
//   width:0.35rem;
//   height: 0.35rem;
//   border-right: none;
//   border-bottom: none;
//   transform: rotate(-45deg);
//   -webkit-transform: rotate(-45deg);
// }
// #ch-title{
//   margin:0 auto;
//   font-size: 0.35rem;
//   line-height: 0.9rem;
// }
// #ch-btn{
//   padding:0 0.15rem;
//   font-size: 0.3rem;
//   // background: none;
// }
#goods {
  width: 100%;
  padding-top: 0.2rem;
}
#goods > img {
  width: 0.37rem;
  height: 0.37rem;
  display: inline-flex;
  margin-bottom: 0.1rem;
}
#ch-add p {
  width: 100%;
  font-size: 0.35rem;
  color: #666;
  line-height: 1.44rem;
  text-align: center;
}
#ch-cover p {
  width: 100%;
  font-size: 0.35rem;
  color: #666;
  line-height: 2rem;
  text-align: center;
}
#ch-cover img {
  position: absolute;
}
#ch-add {
  position: relative;
  width: 7rem;
  height: 1.44rem;
  margin: 0 auto;
  border: 0.02rem dashed #bfbfbf;
  margin-bottom: 0.2rem;
}
#ch-add::before {
  content: '';
  width: 0.36rem;
  height: 0.04rem;
  transform: rotate(0deg);
  display: block;
  background: #666;
  position: absolute;
  top: 0.7rem;
  left: 2.222rem;
}
#ch-add::after {
  content: '';
  width: 0.36rem;
  height: 0.04rem;
  transform: rotate(90deg);
  display: block;
  background: #666;
  position: absolute;
  top: 0.7rem;
  left: 2.222rem;
}
#ch-cover {
  width: 7rem;
  height: 2rem;
  margin: 0 auto;
  border: 0.02rem dashed #bfbfbf;
  position: relative;
}
#ch-cover input {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: none;
  opacity: 0;
}
#ch-cover::before {
  content: '';
  width: 0.36rem;
  height: 0.04rem;
  transform: rotate(0deg);
  display: block;
  background: #666;
  position: absolute;
  top: 0.95rem;
  left: 2.222rem;
}
#ch-cover::after {
  content: '';
  width: 0.36rem;
  height: 0.04rem;
  transform: rotate(90deg);
  display: block;
  background: #666;
  position: absolute;
  top: 0.95rem;
  left: 2.222rem;
}
#intro {
  width: 100%;
}
#title {
  width: 7rem;
  height: 1rem;
  margin: 0 auto;
  color: #666;
  border-bottom: 0.02rem solid #bfbfbf;
  input {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.35rem;
    background: none;
  }
  input::placeholder {
    color: #666;
    font-size: 0.35rem;
  }
  input::-webkit-input-placeholder {
    color: #666;
    font-size: 0.35rem;
  }
  input::-moz-placeholder {
    color: #666;
    font-size: 0.35rem;
  }
  input::-moz-placeholder {
    color: #666;
    font-size: 0.35rem;
  }
  input::-ms-input-placeholder {
    color: #666;
    font-size: 0.35rem;
  }
}

#article {
  width: 7rem;
  height: 6.5rem;
  margin: 0 auto;
  color: #666;
  // input {
  //   width: 100%;
  //   overflow-x:none;
  //   background: none;
  // }
  textarea {
    width: 100%;
    height: 6.5rem;
    line-height: 0.7rem;
    font-size: 0.3rem;
    background: none;
    resize: none;
    border: 0;
    outline: none;
  }
  textarea::placeholder {
    color: #666;
    font-size: 0.3rem;
  }
  textarea::-webkit-input-placeholder {
    color: #666;
    font-size: 0.3rem;
  }
  textarea::-moz-placeholder {
    color: #666;
    font-size: 0.3rem;
  }
  textarea::-moz-placeholder {
    color: #666;
    font-size: 0.3rem;
  }
  textarea::-ms-input-placeholder {
    color: #666;
    font-size: 0.3rem;
  }
}

.con-goods {
  width: 7rem;
  height: 100%;
  margin: 0rem 0.25rem 0.2rem 0.25rem;
  //padding-top: 0.17rem;
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
.cover {
  width: 7rem;
  height: 2rem;
  margin: 0 auto;
  position: relative;
  img {
    position: relative;
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
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
</style>

