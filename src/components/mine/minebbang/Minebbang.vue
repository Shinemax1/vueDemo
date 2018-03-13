<template>
  <div id="Minebbang">
    <Appbar shadow="none" backColor="#ffffff" backgroundColor="rgba(0,0,0,0)" titleColor="#ffffff" title="我的帮帮" type="1" isClick="true" rightClick=""></Appbar>
    <div id="container">
      <div id="my-money">
        <div id="balance">
          <h1>￥126.00</h1>
        </div>
      </div>
      <div class="de-title">
        <h2>账户明细</h2>
      </div>
      <div class="de-list">
        <ul>
          <li class="dl1"><h2>佣金设置</h2><h3>0.5元/笔</h3></li>
          <li class="dl2" @click="toDistribution"><h2>我的分销</h2><h3>共22位</h3><em></em></li>
          <li class="dl3"><h2>我的推文</h2><em></em></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Minebbang',
  methods: {
    toDistribution(){
      this.$router.push({name: 'minedistribution'});
    }
  }
};
</script>
<style lang="scss" scoped>
#Minebbang {
  width: 100%;
  height: 100%;
}
#container {
  width: 100%;
}
#my-money {
  overflow: hidden;
  width: 120%;
  height: 3.7rem;
  margin-left: -10%;
  background-color: #f73a50;
  border-bottom-left-radius: 50% 40%;
  border-bottom-right-radius: 50% 40%;
}
#balance {
  margin-top: 0.88rem;

  width: 100%;
  height: 2.82rem;
  h1 {
    font-size: 1rem;
    line-height: 2.82rem;
    color: #fff;
    text-align: center;
    font-weight: 600;
  }
}
.de-title {
  height: 1.13rem;
  border-bottom: 0.2rem solid #f4f4f4;
  h2 {
    line-height: 0.93rem;
    text-align: center;
    width: 100%;
    font-size: 0.32rem;
    color: #333333;
    font-weight: 500;
  }
}
.de-list {
  li{
    margin: 0;
  }
  .dl1 {
    height: 0.98rem;
    border-bottom: 0.01rem solid #bfbfbf;
    padding-left: 0.82rem;
    padding-right: 0.36rem;
    h2,
    h3 {
      line-height: 0.97rem;
      font-size: 0.32rem;
      color: #333333;
      font-weight: 30;
    }
    h2 {
      float: left;
    }
    h3 {
      float: right;
    }
  }
  .dl2 {
    position: relative;
    height: 0.98rem;
    border-bottom: 0.01rem solid #bfbfbf;
    padding-left: 0.82rem;
    padding-right: 0.36rem;
    h2,
     h3{
      line-height: 0.97rem;
      font-size: 0.32rem;
      color: #333333;
      font-weight: 30;
    }
    h2 {
      float: left;
    }
    h3 {
      margin-right: 0.37rem;
      float: right;
    }
    em {
      content: '';
      position: absolute;
      width: 0.2rem;
      height: 0.2rem;
      top: 0.4rem;
      right: 0.4rem;
      border: 0.03rem solid #666666;
      border-bottom: none;
      border-left: none;
      transform: rotate(45deg);
    }
  }
  .dl3 {
    position: relative;
    height: 0.98rem;
    border-bottom: 0.01rem solid #bfbfbf;
    padding-left: 0.82rem;
    padding-right: 0.36rem;
    h2 {
      line-height: 0.97rem;
      font-size: 0.32rem;
      color: #333333;
      font-weight: 30;
    }
    h2 {
      float: left;
    }
    em {
      content: '';
      position: absolute;
      width: 0.2rem;
      height: 0.2rem;
      top: 0.4rem;
      right: 0.4rem;
      border: 0.03rem solid #666666;
      border-bottom: none;
      border-left: none;
      transform: rotate(45deg);
    }
  }
}
</style>


