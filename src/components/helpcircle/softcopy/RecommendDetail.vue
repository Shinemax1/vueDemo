<template>
  <div id="RecommendDetail">
    <ul>
      <li>
        <img src="../../../assets/helpcircle/item-head.jpg" alt="">
        <h2>好多好多好多好多好多话好多好多</h2>
        <h3>Dior全新烈焰蓝金唇膏</h3>
        <div class="imgbutton">
          <img src="../../../assets/helpcircle/transpond.png" alt="">
          <h4>322</h4>
        </div>
        <div class="imgbutton">
          <img src="../../../assets/helpcircle/transpond.png" alt="">
          <h4>322</h4>
        </div>
        <div class="imgbutton">
          <img src="../../../assets/helpcircle/transpond.png" alt="">
          <h4>322</h4>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
	name: 'RecommendDetail',
};
</script>

<style lang="scss" scoped>
ul {
	//width: 7.6rem;
	//overflow: hidden;
	margin-left: -0.1rem;
	li {
		height: 6rem;
		width: 3.7rem;
		overflow: hidden;
		margin: 0;
		margin-left: 0.1rem;
		border-bottom: 0.2rem solid #f4f4f4;
		float: left;
		.img {
			height: 3.7rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
			img {
				height: 3.7rem;
			}
		}
    h2{
      line-height: 0.35rem;
      font-size: 0.26rem;
      color: #333333;
      height: 0.7rem;
      margin-top: 0.15rem;
    }
    h3{
      line-height: 0.6rem;
      border-bottom: 0.01rem solid #f4f4f4;
      font-size: 0.23rem;
      color: #666666;
    }
    .imgbutton{
      float: left;
      width: 1.2rem;
      height: 0.85rem;
      margin: 0.1rem 0;
      border-right: 0.01rem solid #f4f4f4;
      img{
        height: 0.33rem;
      }
      h4{
        line-height: 0.85rem;
        font-size: 0.23rem;
        color: #666666;
      }
    }
	}
}
</style>


