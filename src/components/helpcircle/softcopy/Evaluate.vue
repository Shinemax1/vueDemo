<template>
  <div id="Evaluate">
    <section>
      <ul>
        <li>
          <div class="head">
            <img src="../../../assets/represent/head.png" alt="">
          </div>
          <div class="center">
            <h2>122<span>收藏·0&nbsp;赞·178</span></h2>
            <p>立即购买立即购买立即购买立即购买立即购买立即购买立即购买立即购买立即购买</p>
            <div style="marginLeft:-0.3rem;">
              <div class="img">
                <img src="../../../assets/helpcircle/item-head.jpg" alt="">
              </div>
              <div class="img">
                <img src="../../../assets/helpcircle/item-head.jpg" alt="">
              </div>
              <div class="img">
                <img src="../../../assets/helpcircle/item-head.jpg" alt="">
              </div>
              <div class="img">
                <img src="../../../assets/helpcircle/item-head.jpg" alt="">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="head">
            <img src="../../../assets/represent/head.png" alt="">
          </div>
          <div class="center">
            <h2>122<span>收藏·0&nbsp;赞·178</span></h2>
            <p>立即购买立即购买立即购买立即购买立即购买立即购买立即购买立即购买立即购买</p>
            <div style="marginLeft:-0.3rem;">
              <div class="img">
                <img src="../../../assets/helpcircle/item-head.jpg" alt="">
              </div>
              <div class="img">
                <img src="../../../assets/helpcircle/item-head.jpg" alt="">
              </div>
              <div class="img">
                <img src="../../../assets/helpcircle/item-head.jpg" alt="">
              </div>
              <div class="img">
                <img src="../../../assets/helpcircle/item-head.jpg" alt="">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="head">
            <img src="../../../assets/represent/head.png" alt="">
          </div>
          <div class="center">
            <h2>122<span>收藏·0&nbsp;赞·178</span></h2>
            <p>立即购买立即购买立即购买立即购买立即购买立即购买立即购买立即购买立即购买</p>
            <div style="marginLeft:-0.3rem;">
              <div class="img">
                <img src="../../../assets/helpcircle/item-head.jpg" alt="">
              </div>
              <div class="img">
                <img src="../../../assets/helpcircle/item-head.jpg" alt="">
              </div>
              <div class="img">
                <img src="../../../assets/helpcircle/item-head.jpg" alt="">
              </div>
              <div class="img">
                <img src="../../../assets/helpcircle/item-head.jpg" alt="">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <footer>
      <div class="imgbutton">
        <img src="../../../assets/helpcircle/softcopy/service.png" alt="">
        <h2>客服</h2>
      </div>
      <div class="imgbutton">
        <img src="../../../assets/helpcircle/softcopy/represent.png" alt="">
        <h2>代言</h2>
      </div>
      <mu-raised-button style="backgroundColor:#ffa4af;">加入购物车</mu-raised-button>
      <mu-raised-button>立即购买</mu-raised-button>
    </footer>
  </div>
</template>

<script>
export default {
	name: 'Evaluate',
};
</script>

<style lang="scss" scoped>
section {
	ul {
		width: 100%;
		overflow: hidden;
		li {
			width: 100%;
			margin: 0;
      border-bottom: 0.03rem solid #f4f4f4; 
			padding: 0.3rem;
      box-sizing: border-box;
			overflow: hidden;
			.head {
				width: 0.66rem;
				height: 0.66rem;
				float: left;
				display: flex;
				justify-content: center;
				margin-right: 0.25rem;
				align-items: center;
				img {
					height: 0.66rem;
				}
			}
			.center {
				width: 5.9rem;
				float: left;
				overflow: hidden;
				h2 {
					font-weight: 400;
					font-size: 0.26rem;
					line-height: 0.45rem;
					color: #f73a50;
					span {
						float: right;
						font-weight: 400;
						font-size: 0.26rem;
						line-height: 0.45rem;
						color: #bfbfbf;
					}
				}
				p {
					font-weight: 400;
					font-size: 0.32rem;
					line-height: 0.55rem;
					color: #333333;
				}
				.img {
          width: 1.25rem;
          height: 1.25rem;
          display: flex;
          float: left;
          justify-content: center;
          align-items: center;
          margin-left: 0.3rem;
					img {
						height: 1.25rem;
					}
				}
			}
		}
	}
}
footer {
	height: 0.98rem;
	position: fixed;
	bottom: 0;
  background-color: #ffffff;
	width: 100%;
	.imgbutton {
		float: left;
		width: 1.5rem;
		height: 100%;
		img {
			height: 0.39rem;
			margin: 0.12rem auto 0;
		}
		h2 {
			line-height: 0.44rem;
			font-size: 0.22rem;
			color: #f73a50;
			width: 100%;
			text-align: center;
		}
	}
	.mu-raised-button {
		float: left;
		min-width: 2.25rem;
		height: 0.98rem;
		color: #ffffff;
		background-color: #f73a50;
		font-size: 0.32rem;
		border-radius: 0;
		text-align: center;
	}
}
</style>


