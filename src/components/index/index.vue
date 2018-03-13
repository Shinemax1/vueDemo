<template>
  <div id="index">
    <!-- 顶部的Toolbar部分 -->
    <mu-appbar class="mu-appbar">
      <div class="appbar-left" slot="left">
        <h4>杭州</h4>
      </div>
      <img slot="right" src="../../assets/index/search.png" alt="" @click="toSearch">
      <!-- <div class="appbar-search-field" slot="right"></div> -->
      <div class="appbar-right" slot="right"></div>
    </mu-appbar>
    <!-- 中部的内容区域 -->
    <!-- 这里放了一个div，给定一个class去设置样式 -->
    <div class="content">
      <div class="part1"></div>
      <div class="part1-view"></div>
      <div class="part2 clear">
        <ul class="clear">
          <li @click="toKeephealth">
            <div class="li-img">
              <img src="../../assets/index/keephealth.png" alt="">
            </div>
            <h4>养生保健</h4>
          </li>
          <li @click="toVagetable">
            <div class="li-img">
              <img src="../../assets/index/vagetable.png" alt="">
            </div>
            <h4>农副产品</h4>
          </li>
          <li @click="toFitness">
            <div class="li-img">
              <img src="../../assets/index/sport.png" alt="">
            </div>
            <h4>运动健身</h4>
          </li>
          <li @click="toFashion">
            <div class="li-img">
              <img src="../../assets/index/clothes.png" alt="">
            </div>
            <h4>包箱服饰</h4>
          </li>
          <li @click="toHomeAppliance">
            <div class="li-img">
              <img src="../../assets/index/homeappliance.png" alt="">
            </div>
            <h4>家具家电</h4>
          </li>
          <li @click="toEntertainment">
            <div class="li-img">
              <img src="../../assets/index/entertainment.png" alt="">
            </div>
            <h4>休闲娱乐</h4>
          </li>
          <li>
            <div class="li-img">
              <img src="../../assets/index/tastefood.png" alt="">
            </div>
            <h4>美食</h4>
          </li>
          <li @click="toDiscountcoupou">
            <div class="li-img">
              <img src="../../assets/index/discountcoupou.png" alt="">
            </div>
            <h4>优惠券</h4>
          </li>
          <li @click="toSign">
            <div class="li-img">
              <img src="../../assets/index/signin.png" alt="">
            </div>
            <h4>天天签到</h4>
          </li>
          <li>
            <div class="li-img">
              <img src="../../assets/index/more.png" alt="">
            </div>
            <h4>更多</h4>
          </li>
        </ul>
      </div>
      

        <div class="part3">
          <transition name="slide-fade" >
            <div class="part3-head" >
          <img src="../../assets/index/head.png" alt="">
        </div>
          </transition>
          <transition name="slide-fade">
        <div class="part3-content" v-if="show">
          <h2>MR凡先生</h2>
          <h3>留下那边开了家炒酸奶,味道很胖胖哦</h3>
        </div>
          </transition>
          <transition name="slide-fade">
        <div class="part3-img" v-if="show">
          <img src="../../assets/index/part3img.png" alt="">
        </div>
          </transition>
      </div>
      <div class="part4">
        <ul>
          <li @click="toSeckill">
            <div class="part4-img">
              <img src="../../assets/index/seckill.jpg" alt=""> 
            </div>
            <div class="tag">
              <img src="../../assets/index/seckill-tag.png" alt="">
            </div>
          </li>
          <li>
            <div class="part4-img">
              <img src="../../assets/index/groupbuying.jpg" alt="">
            </div>
            <div class="tag">
              <img src="../../assets/index/groupbuying-tag.png" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class="part5">
        <ul>
          <li @click="toMustSellList">
            <div class="part5-img">
              <img src="../../assets/index/buylist.jpg" alt="">
            </div>
            <div class="tag">
              <img src="../../assets/index/buylist-tag.png" alt="">
            </div>
          </li>
          <li @click="toFindGood">
            <div class="part5-img">
              <img src="../../assets/index/findgood.jpg" alt="">
            </div>
            <div class="tag">
              <img src="../../assets/index/findgood-tag.png" alt="">
            </div>
          </li>
          <li @click="toDayspecial">
            <div class="part5-img">
              <img src="../../assets/index/dayspecial.jpg" alt="">
            </div>
            <div class="tag">
              <img src="../../assets/index/dayspecial-tag.png" alt="">
            </div>
          </li>
          <li @click="toHelpHotSell">
            <div class="part5-img">
              <img src="../../assets/index/helpsell.jpg" alt="">
            </div>
            <div class="tag">
              <img src="../../assets/index/helpsell-tag.png" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class="part6 clear">        
        <ul>
          <li>
            <img src="../../assets/index/clothesshow.jpg" alt="">
            <h4>潮流衣展！</h4>
          </li>
          <li>
            <img src="../../assets/index/match1.jpg" alt="">
            <h4>小清新搭配！</h4>
          </li>
          <li>
            <img src="../../assets/index/match2.jpg" alt="">
          </li>
          <li>
            <img src="../../assets/index/match3.jpg" alt="">
          </li>
          <li>
            <img src="../../assets/index/match4.jpg" alt="">
          </li>
        </ul>
        <div class="tag">
          <img src="../../assets/index/helpshow.png" alt="">
        </div>
      </div>
      <div class="part7 clear">
        <div class="part7-title">
          <h4>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;猜你喜欢&nbsp;-</h4>          
        </div>
        <ul>
          <li>
            <div class="part7-img">
              <img src="../../assets/index/clothes.jpg" alt="">
            </div>
            <h3>秋冬新款男士针织毛衣韩版加厚保暖</h3>
            <div class="part7-content">
              <h2>￥246</h2>
              <h4>279人付款</h4>
            </div>           
          </li>
          <li>
            <div class="part7-img">
              <img src="../../assets/index/bag1.png" alt="">
            </div>
            <h3>秋冬新款包包</h3>
            <div class="part7-content">
              <h2>￥246</h2>
              <h4>279人付款</h4>
            </div>
          </li>
          <li>
            <div class="part7-img">
              <img src="../../assets/index/bag2.png" alt="">
            </div>
            <h3>韩版新款包包</h3>
            <div class="part7-content">
              <h2>￥246</h2>
              <h4>279人付款</h4>
            </div>
          </li>
          <li>
            <div class="part7-img">
              <img src="../../assets/index/bag.png" alt="">
            </div>
            <h3>秋冬新款男士针织毛衣韩版加厚保暖</h3>
            <div class="part7-content">
              <h2>￥246</h2>
              <h4>279人付款</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
	name: 'index',
	data() {
		return {
			bottomNav: 'movies',
			selected: 'index',
			scrollerHeight: 0,
			show: true,
		};
	},
	computed: {},
	methods: {
		...mapActions(['indexTabbarHide']),
		scroll() {
			this.scrollerHeight = window.scrollY / 100;
		},
		toHelpHotSell() {
			this.$router.push('helphotsell');
			this.indexTabbarHide();
		},
		toFashion() {
			this.$router.push('fashion');
			this.indexTabbarHide();
		},
		toMustSellList() {
			this.$router.push('mustselllist');
			this.indexTabbarHide();
		},
		toHomeAppliance() {
			this.$router.push('homeappliance');
			this.indexTabbarHide();
		},
		toFitness() {
			this.$router.push('fitness');
			this.indexTabbarHide();
		},
		toSeckill() {
			this.$router.push('seckill');
			this.indexTabbarHide();
		},
		toVagetable() {
			this.$router.push('vagetable');
			this.indexTabbarHide();
		},
		toKeephealth() {
			this.$router.push('keephealth');
			this.indexTabbarHide();
		},
		toDayspecial() {
			this.$router.push('dayspecial');
			this.indexTabbarHide();
		},
		toEntertainment() {
			this.$router.push('entertainment');
			this.indexTabbarHide();
		},
		toDiscountcoupou() {
			this.$router.push('discountcoupou');
			this.indexTabbarHide();
		},
		toSign() {
			this.$router.push('sign');
			this.indexTabbarHide();
		},
		toFindGood() {
			this.$router.push('findgood');
			this.indexTabbarHide();
		},
		toSearch() {
			this.$router.push('searchrepresent');
			this.indexTabbarHide();
		},
	},
	created() {
		var that = this;
		window.addEventListener('scroll', this.scroll);
		var aa = setInterval(function() {
			that.show = !that.show;
		}, 1500);
	},
};
</script>

<style lang="scss" scoped>
#index {
	.mu-appbar {
		position: fixed;
		height: 0.88rem;
		top: 0;
		background-color: #f73a50;
		padding: 0rem;
		.appbar-left {
			margin-left: 0.16rem;
			h4 {
				align-items: center;
				font-size: 0.28rem;
				line-height: 0.28rem;
				color: #ffffff;
			}
			h4::before {
				content: '';
				width: 0.16rem;
				height: 0.16rem;
				transform: rotate(45deg);
				display: block;
				position: absolute;
				border: none;
				border-bottom: 0.03rem solid #ffffff;
				border-right: 0.03rem solid #ffffff;
				top: 0.34rem;
				left: 0.8rem;
			}
		}
		// .appbar-search-field {
		//   opacity: 0.9;
		//   width: 5.4rem;
		//   height: 0.6rem;
		//   background-image: ;
		//   border-radius: 0.3rem;
		// }
		img {
			height: 0.58rem;
		}
		.appbar-right {
			width: 0.88rem;
			height: 0.88rem;
			background-size: 0.44rem;
			background-position: center;
			background-repeat: no-repeat;
			background-image: url('../../assets/index/qrcode.png');
		}
	}

	.content {
		margin-top: 0.88rem;
		width: 100%;
		position: relative;
		padding-bottom: 0.98rem;
		.part1 {
			// position: fixed;
			// top: 0.88rem;
			width: 100%;
			height: 2.4rem;
			background-image: url('../../assets/index/index-background.jpg');
			background-size: 7.5rem 2.4rem;
		}
		.part1-view {
			position: absolute;
			top: 2.1rem;
			height: 0.4rem;
			width: 110%;
			margin-left: -5%;
			border-top-left-radius: 60% 100%;
			border-top-right-radius: 40% 100%;
			background: #ffffff;
		}
		.part2 {
			padding: 0.17rem 0;
			ul {
				li {
					float: left;
					height: 1.32rem;
					width: 1.5rem;
					margin: 0rem 0rem 0.14rem;
					.li-img {
						width: 1.5rem;
						height: 0.9rem;
						display: flex;
						justify-content: center;
						align-items: center;
						img {
							height: 0.9rem;
						}
					}
					h4 {
						text-align: center;
						line-height: 0.42rem;
						font-size: 0.24rem;
					}
				}
			}
		}
		.part3 {
			height: 0.98rem;
			display: flex;
			padding: 0 0.17rem;
			border-bottom: 0.04rem solid #e4e4e4;
			.part3-head {
				width: 1.08rem;
				height: 0.94rem;
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					height: 0.66rem;
				}
			}
			.part3-content {
				width: 4.52rem;
				h2 {
					align-items: center;
					line-height: 0.46rem;
					font-size: 0.24rem;
					color: #b2b2b2;
				}
				h3 {
					align-items: center;
					line-height: 0.48rem;
					font-size: 0.24rem;
					color: #333333;
				}
			}
			.part3-img {
				width: 1.56rem;
				height: 0.94rem;
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					height: 0.7rem;
				}
			}
		}
		.part4 {
			ul {
				width: 100%;
				height: 2.4rem;
				padding: 0.1rem 0.05rem;
				li {
					position: relative;
					float: left;
					margin: 0;
					.part4-img {
						width: 3.7rem;
						height: 2.2rem;
						display: flex;
						justify-content: center;
						align-items: center;
						img {
							height: 2.2rem;
						}
					}
					.tag {
						position: absolute;
						top: 0.1rem;
						left: 0.04rem;
						img {
							height: 0.44rem;
						}
					}
				}
			}
		}
		.part5 {
			ul {
				width: 100%;
				height: 2rem;
				padding: 0 0.05rem;
				li {
					position: relative;
					float: left;
					margin: 0;
					.part5-img {
						width: 1.85rem;
						height: 2rem;
						display: flex;
						justify-content: center;
						align-items: center;
						img {
							height: 2rem;
						}
					}
					.tag {
						position: absolute;
						top: 0.1rem;
						left: 0.04rem;
						img {
							height: 0.44rem;
						}
					}
				}
			}
		}
		.part6 {
			position: relative;
			padding: 0.44rem 0 0;
			ul {
				li {
					position: relative;
					float: left;
					margin: 0;
					img {
						height: 2.2rem;
					}
					h4 {
						position: absolute;
						bottom: 0;
						left: 0.14rem;
						color: #ffffff;
						font-size: 0.28rem;
						line-height: 0.68rem;
					}
				}
			}
			.tag {
				position: absolute;
				top: 0.25rem;
				img {
					height: 0.44rem;
				}
			}
		}
		.part7 {
			position: relative;
			background-color: #f4f4f4;
			.part7-title {
				background-color: #ffffff;
				h4 {
					line-height: 0.88rem;
					width: 100%;
					font-size: 0.32rem;
					text-align: center;
					color: #f73a50;
					font-weight: 500;
				}
				h4::before {
					content: '';
					background-image: url('../../assets/index/like.png');
					background-size: 0.36rem 0.31rem;
					background-position: center;
					background-repeat: no-repeat;
					width: 0.36rem;
					height: 0.31rem;
					position: absolute;
					top: 0.26rem;
					left: 2.89rem;
				}
			}

			ul {
				overflow: hidden;
				margin-left: -0.22rem;
				flex-flow: row wrap;
				display: flex;
        align-items: center;
        height: auto;
				li {
					background-color: #ffffff;
					width: 3.64rem;
					//float: left;
					margin: 0 0 0.15rem 0.22rem;
					overflow: hidden;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.part7-img {
						width: 3.64rem;
						height: 3.63rem;
						display: flex;
						justify-content: center;
						align-items: center;
						img {
							height: 3.63rem;
						}
					}
					h3 {
						margin: 0 0.3rem 0 0.18rem;
						line-height: 0.47rem;
						font-size: 0.26rem;
						color: #333333;
						font-weight: 500;
					}
					.part7-content {
						display: flex;
						h2 {
							margin: 0 0.2rem;
							line-height: 0.42rem;
							font-size: 0.28rem;
							color: #f8465b;
							font-weight: 500;
						}
						h4 {
							line-height: 0.42rem;
							font-size: 0.24rem;
							color: #61656a;
							text-align: left;
							font-weight: 450;
						}
					}
				}
			}
		}
	}
}
.slide-fade-enter-active {
	transition: all 0.1s ease;
}
.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-to {
	transform: translateY(-0.3rem);
	opacity: 0;
}
.slide-fade-enter {
	transform: translateY(0.3rem);
	opacity: 0;
}
</style>


