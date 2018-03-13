<template>
  <div id="SoftCopy">
    <div class="head">
      <div class="back" @click="back"></div>
      <div class="img">
        <img :src="'http://47.100.119.217:8080/webound'+productsInfoEntity.productImage.split(',')[0]" alt="">        
      </div>
    </div>
    <div class="content">
      <div class="title">
        <div class="part1">
          <h2>￥{{productsInfoEntity.productPrice}}<span>包邮</span></h2>
          <h3>佣金:&nbsp;&nbsp;{{productsInfoEntity.commission}}元/笔</h3>
        </div>
        <div class="part2">
          <h2>{{productsInfoEntity.productName}}</h2>
        </div>
        <div class="part3">
          <h3>月销299笔</h3>
          <h2>快递：{{productsInfoEntity.productShippingCost}}</h2>
          <h4>{{productsInfoEntity.productProvince+productsInfoEntity.productCity}}</h4>
        </div>
      </div>
      <div class="coupon">
        <div class="discount">
          <img src="../../../assets/helpcircle/softcopy/conpou.png" alt="">
          <h3>10元店铺优惠券</h3>
        </div>
        <div class="insurance">
          <h2>7天无理由</h2>
          <h3>运险费</h3>
        </div>
      </div>
      <div class="producttype">
        <ul>
          <li>
            <h2>选择颜色分类</h2>
          </li>
          <li>
            <h2>产品参数</h2>
          </li>
        </ul>
      </div>
      <!-- <div class="represent-head">
        <img src="../../../assets/represent/head.png" alt="">
        <h2>Caubyyy</h2>
        <mu-raised-button>关注</mu-raised-button>
      </div>
      <div class="represent-content"></div> -->
    </div>
    <div class="moretype">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <div class="bar" :style="{opacity:scrollerHeight}">
        <div class="back" @click="back" ></div>
        <img :src="'http://47.100.119.217:8080/webound'+productsInfoEntity.productImage.split(',')[0]" alt="">        
        <div class="more"></div>
      </div>
      <mu-tabs  :value="activeTab" @change="handleTabChange" :style="{opacity:scrollerHeight}">
        <mu-tab title="推文" value="pushcharacter"/>
        <mu-tab title="评价" value="evaluate"/>
        <mu-tab title="商品" value="commodity"/>
        <mu-tab title="推荐" value="recommend"/>
      </mu-tabs>
    
    <mu-float-button class="demo-float-button">购买</mu-float-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'SoftCopy',
	data() {
		return {
			scrollerHeight: 0,
			activeTab: 'pushcharacter',
			productsInfoEntity: {},
		};
	},
	computed: {
		...mapGetters(['mediaContentEntity']),
	},
	methods: {
		...mapActions(['indexTabbarHide']),
		back() {
			this.$router.go(-1);
			this.indexTabbarHide();
		},
		scroll() {
			this.scrollerHeight = window.scrollY / 300;
			this.scrollerHeight = window.scrollY / 300;
		},
		handleTabChange(val) {
			this.activeTab = val;
			switch (val) {
				case 'pushcharacter':
					//this.$router.replace('pushcharacter');
					this.$router.replace({
						name: 'pushcharacter',
						params: this.productsInfoEntity,
					});
					break;
				case 'evaluate':
					//this.$router.replace('evaluate');
					this.$router.replace({ name: 'evaluate' });
					break;
				case 'commodity':
					//this.$router.replace('commodity');
					this.$router.replace({ name: 'commodity' });
					break;
				default:
					//this.$router.replace('recommend');
					this.$router.replace({ name: 'recommend' });
					break;
			}
		},
	},
	created() {
		this.productsInfoEntity = this.mediaContentEntity.productsInfoEntity;
		this.$router.replace({
			name: 'pushcharacter',
		});
		//this.$router.replace('pushcharacter');

		window.addEventListener('scroll', this.scroll);
	},
	mounted() {
		//topLine样式
		let aNavLine = document.querySelector('.mu-tab-link-highlight');
		aNavLine.style.background = 'rgba(0,0,0,0)';
		aNavLine.innerHTML =
			'<i style="display:block;height:0.04rem;width:0.8rem;margin-left:0.54rem;background:#f73a50;"><i>';
		//mu-ripple-wrapper
		let aWrapper = document.querySelectorAll('.mu-tab-link');
		console.log(aWrapper);
		for (let i = 0; i < aWrapper.length; i++) {
			aWrapper[i].children[0].children[0].style.marginTop = '0.14rem';
			aWrapper[i].children[0].children[0].style.height = '0.56rem';
		}
	},
};
</script>

<style lang="scss" scoped>
.bar {
	width: 7.5rem;
	height: 0.86rem;
	background-color: #ffffff;
	padding: 0 0.4rem;
	position: fixed;
	top: 0;
	.back {
		position: absolute;
		content: '';
		width: 0.3rem;
		height: 0.3rem;
		top: 0.27rem;
		left: 0.2rem;
		border: 0.05rem solid #333333;
		border-top: none;
		border-right: none;
		transform: rotate(45deg);
	}
	img {
		width: 0.58rem;
		height: 0.58rem;
		margin: 0.14rem 2.18rem 0.14rem 3.06rem;
		float: left;
	}
	.more {
		float: right;
		width: 0.88rem;
		height: 0.88rem;
		background-size: 0.44rem;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url('../../../assets/helpcircle/softcopy/more.png');
	}
}
.mu-tabs {
	position: fixed;
	top: 0.86rem;
	height: 0.56rem;
	width: 7.5rem;
	background-color: #ffffff !important;
	.mu-tab-link {
		color: #999999;
	}
	.mu-tab-active {
		color: #333333;
	}
}
.bar-bottom {
	width: 7.5rem;
	height: 0.56rem;
	border-bottom: 0.01rem solid #bfbfbf;
	background-color: #ffffff;
	position: fixed;
	top: 0.86rem;
	h3 {
		line-height: 0.55rem;
		font-size: 0.32rem;
		color: #333333;
		text-align: center;
		float: left;
		width: 1.875rem;
	}
}
.head {
	margin-top: -0.44rem;
	.back {
		position: fixed;
		content: '';
		width: 0.3rem;
		height: 0.3rem;
		top: 0.27rem;
		left: 0.2rem;
		border: 0.05rem solid #ffffff;
		border-top: none;
		border-right: none;
		transform: rotate(45deg);
	}
	.img {
		width: 7.5rem;
		height: 5.1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		img {
			//height: 5.1rem;
			width: 7.5rem;
		}
	}
}
.content {
	background-color: #ffffff;
	.title {
		padding: 0 0.2rem;
		width: 7.5rem;
		height: 2.92rem;
		border-bottom: 0.2rem solid #f4f4f4;
		.part1 {
			height: 0.66rem;
			width: 100%;
			> h2 {
				float: left;
				font-size: 0.38rem;
				line-height: 0.66rem;
				color: #f73a50;
				font-weight: 400;
				span {
					//padding: 0.1rem 0;
					margin-left: 0.25rem;
					border: 0.01rem solid #f73a50;
					border-radius: 0.07rem;
					font-size: 0.24rem;
					line-height: 0.3rem;
					height: 0.3rem;
					color: #f73a50;
					text-align: center;
					width: 0.6rem;
					display: inline-block;
				}
			}
			> h3 {
				font-weight: 400;
				float: right;
				font-size: 0.28rem;
				line-height: 0.66rem;
				color: #f73a50;
			}
		}
		.part2 {
			width: 100%;
			height: 1.16rem;
			h2 {
				font-weight: 400;
				height: 1.16rem;
				font-size: 0.32rem;
				line-height: 0.58rem;
				color: #333333;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
		.part3 {
			margin-top: 0.14rem;
			width: 100%;
			height: 0.78rem;
			padding: 0 2.2rem;
			overflow: hidden;
			h3 {
				width: 100%;
				font-size: 0.26rem;
				line-height: 0.78rem;
				color: #666666;
				text-align: center;
				float: left;
			}
			h2 {
				margin-left: -100%;
				width: 2.2rem;
				float: left;
				text-align: left;
				font-size: 0.26rem;
				line-height: 0.78rem;
				color: #666666;
				position: relative;
				left: -2.2rem;
			}
			h4 {
				margin-left: -2.2rem;
				width: 2.2rem;
				float: left;
				font-size: 0.26rem;
				line-height: 0.78rem;
				color: #666666;
				position: relative;
				text-align: right;
				right: -2.2rem;
			}
		}
	}
	.coupon {
		width: 7.5rem;
		height: 1.98rem;
		border-bottom: 0.2rem solid #f4f4f4;
		.discount {
			padding: 0 0.2rem;
			width: 100%;
			height: 0.9rem;
			border-bottom: 0.03rem solid #f4f4f4;
			position: relative;
			display: flex;
			img {
				height: 0.38rem;
				margin: 0.245rem 0;
			}
			h3 {
				line-height: 0.87rem;
				font-size: 0.28rem;
				color: #666666;
				font-weight: 400;
				margin-left: 0.22rem;
			}
			h3::before {
				content: '';
				position: absolute;
				width: 0.25rem;
				height: 0.25rem;
				top: 0.3rem;
				right: 0.3rem;
				border: 0.03rem solid #666666;
				border-bottom: none;
				border-left: none;
				transform: rotate(45deg);
			}
		}
		.insurance {
			padding: 0 0.2rem;
			width: 100%;
			height: 0.9rem;
			position: relative;
			display: flex;
			h2,
			h3 {
				line-height: 0.87rem;
				font-size: 0.28rem;
				color: #666666;
				font-weight: 400;
			}
			h2 {
				width: 2.2rem;
			}
		}
	}
	.producttype {
		padding: 0 0.2rem;
		width: 7.5rem;
		height: 1.91rem;
		border-bottom: 0.2rem solid #f4f4f4;
		ul {
			width: 100%;
			overflow: hidden;
			li {
				width: 100%;
				height: 0.88rem;
				margin: 0;
				border-bottom: 0.01rem solid #bfbfbf;
				position: relative;
				h2 {
					line-height: 0.87rem;
					font-size: 0.28rem;
					color: #333333;
					font-weight: 400;
				}
				h2::before {
					content: '';
					position: absolute;
					width: 0.25rem;
					height: 0.25rem;
					top: 0.3rem;
					right: 0.1rem;
					border: 0.03rem solid #666666;
					border-bottom: none;
					border-left: none;
					transform: rotate(45deg);
				}
			}
			li:nth-last-of-type(1) {
				border: none;
			}
		}
	}
	.represent-head {
		width: 6.7rem;
		height: 1.23rem;
		margin: 0 auto;
		border-bottom: 0.01rem solid #bfbfbf;
		img {
			float: left;
			height: 0.88rem;
			margin: 0.17rem 0;
		}
		h2 {
			line-height: 1.22rem;
			font-size: 0.32rem;
			color: #333333;
			margin-left: 0.2rem;
			float: left;
		}
		.mu-raised-button {
			float: right;
			margin: 0.32rem 0;
			padding-left: 0.4rem;
			width: 1.5rem;
			height: 0.58rem;
			border-radius: 0.03rem;
			background-color: #f73a50;
			font-size: 0.32rem;
			color: #fcf7f5;
			line-height: 0.58rem;
			text-align: center;
			position: relative;
		}
		.mu-raised-button::before {
			content: '';
			width: 0.25rem;
			height: 0.03rem;
			transform: rotate(0deg);
			display: block;
			background: #ffffff;
			position: absolute;
			top: 0.28rem;
			left: 0.27rem;
		}
		.mu-raised-button::after {
			content: '';
			width: 0.25rem;
			height: 0.03rem;
			transform: rotate(90deg);
			display: block;
			background: #ffffff;
			position: absolute;
			top: 0.28rem;
			left: 0.27rem;
		}
	}
	.represent-content {
		height: 15rem;
		width: 7.5rem;
	}
}

.mu-float-button {
	position: fixed;
	bottom: 1.5rem;
	right: 0.55rem;
	width: 1.18rem;
	height: 1.18rem;
	font-size: 0.32rem;
	background: -webkit-linear-gradient(#fe8e9b, #f8475c); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(#fe8e9b, #f8475c); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(#fe8e9b, #f8475c); /* Firefox 3.6 - 15 */
	background: linear-gradient(#fe8e9b, #f8475c); /* 标准的语法 */
}
.moretype {
	height: 15rem;
	width: 7.5rem;
}

.fade-enter-active {
	transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>


