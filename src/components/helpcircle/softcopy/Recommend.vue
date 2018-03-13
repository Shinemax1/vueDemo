<template>
  <div id="Recommend">
    <div class="content">
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
  </div>
</template>

<script>
export default {
	name: 'Recommend',
};
</script>

<style lang="scss" scoped>
.content {
	ul {
		overflow: hidden;
		background-color: #f4f4f4;
		margin: 0;
		margin-left: -0.1rem;
		li {
			height: 6rem;
			width: 3.7rem;
			overflow: hidden;
			margin: 0rem;
			margin-left: 0.1rem;
			border-bottom: 0.1rem solid #f4f4f4;
			float: left;
			background-color: #ffffff;
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
			h2 {
				line-height: 0.35rem;
				font-size: 0.26rem;
				color: #333333;
				height: 0.7rem;
				margin: 0.15rem 0.15rem 0;
			}
			h3 {
				line-height: 0.6rem;
				border-bottom: 0.01rem solid #f4f4f4;
				font-size: 0.23rem;
				color: #666666;
				padding: 0 0.15rem;
			}
			.imgbutton {
				float: left;
				width: 1.232rem;
				height: 0.55rem;
				margin: 0.1rem 0;
				border-right: 0.01rem solid #f4f4f4;
				img {
					height: 0.33rem;
					float: left;
					margin: 0.11rem 0 0.11rem 0.2rem;
				}
				h4 {
					margin-left: 0.1rem;
					line-height: 0.55rem;
					font-size: 0.23rem;
					color: #666666;
					float: left;
				}
			}
			.imgbutton:nth-of-type(3) {
				border: none;
			}
		}
	}
}
</style>


