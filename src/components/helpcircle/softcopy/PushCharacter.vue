<template>
  <div id="PushCharacter">
    <div class="represent-head">
      <img :src="userInfoEntity.userHeadPortrait" alt="">
      <h2>{{userInfoEntity.userName}}</h2>
      <mu-raised-button>关注</mu-raised-button>
    </div>
    <div class="represent-content">
      <h2>一个集美貌才华于一身的男子!</h2>
    </div>
		<div class="represent-comment">
			<div class="type1">
				<img src="../../../assets/represent/head.png" alt="">
				<div class="center">
					<h2>六道仙人</h2>
					<h3>哈哈哈哈哈</h3>
					<div class="span"><h4>45分钟前</h4><button>1回复</button></div>					
				</div>
				<span>
					<img src="../../../assets/represent/like.png" alt="">
					<h5>12</h5>
				</span>
			</div>
			<div class="type1">
				<img src="../../../assets/represent/head.png" alt="">
				<div class="center">
					<h2>风过无痕</h2>
					<h3>我觉得这件ok!</h3>
					<div class="span"><h4>45分钟前</h4><button>1回复</button></div>
					<p>
						<span>郭顶:</span>
						这件商品很不错！
					</p>
					<p>
						<span>Mr凡先生:</span>
						楼上说的有道理！
					</p>
					<p>
						<span>knight:</span>
						这个商品让我给100分。
					</p>
					<p>
						<span>jony:</span>
						year,I like this.
					</p>
					<p @click="toDetail"><span>查看全部10条回复</span>&nbsp;</p>
				</div>
				<span>
					<img src="../../../assets/represent/like.png" alt="">
					<h5>12</h5>
				</span>
				
			</div>
		</div>
		<div class="footer">
      <input type="text" placeholder="说点什么吧" v-model="comment">
      <div class="icon" @click="collect">
        <img v-if="!data.haveCollected" src="../../../assets/helpcircle/softcopy/collect.png" alt="">
        <img v-else src="../../../assets/helpcircle/softcopy/collect-t.png" alt="">
      </div>
      <div class="icon" @click="savecomment">
        <img src="../../../assets/helpcircle/softcopy/like.png" alt="">
      </div>
      <div class="icon">
        <img src="../../../assets/helpcircle/softcopy/transmit.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'PushCharacter',
	data() {
		return {
			productsInfoEntity: {},
			userInfoEntity: {},
			comment: '',
			data: {},
			pageSize: 10,
			pageNo: 1,
		};
	},
	computed: {
		...mapGetters(['userId', 'mediaContentEntity']),
	},
	methods: {
		...mapActions(['collectMediaContent', 'saveComment', 'getCommentList', 'getMediaContentDetail']),
		toDetail() {
			this.$router.push({ name: 'commentdetail' });
		},
		collect() {
			this.collectMediaContent({
				data: {
					mediaContentId: this.data.id,
					decrease: this.data.haveCollected ? 1 : 0,
				},
				success: () => {
					this.data.haveCollected = !this.data.haveCollected;
				},
			});
		},
		savecomment() {
			this.saveComment({
				data: {
					userId: this.userId,
					mediaContentId: this.data.id,
					comment: this.comment,
					parentId: '',
				},
				success: () => {},
			});
		},
	},
	created() {
		this.data = this.mediaContentEntity;
		this.productsInfoEntity = this.data.productsInfoEntity;
		this.userInfoEntity = this.data.userInfoEntity;
		this.getCommentList({
			data: {
				mediaContentId: this.data.id,
				pageSize: this.pageSize,
				pageNo: this.pageNo,
			},
			success: () => {},
    });
	},
};
</script>

<style lang="scss" scoped>
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
	width: 6.7rem;
	margin: 0 auto;
	h2{
		font-size: 0.32rem;
		line-height: 0.58rem;
		text-align: center;
		font-weight: 500;
	}
}
.represent-comment {
	.type1 {
		width: 7.5rem;
		//height: 1.87rem;
		padding: 0.42rem 0.3rem 0;
		> img {
			height: 0.66rem;
			float: left;
			margin-right: 0.25rem;
		}
		.center {
			width: 5.29rem;
			float: left;
			//height: 1.45rem;
			h2 {
				font-weight: 400;
				font-size: 0.26rem;
				line-height: 0.45rem;
				color: #f73a50;
			}
			h3 {
				font-weight: 400;
				font-size: 0.32rem;
				line-height: 0.55rem;
				color: #333333;
			}

			.span {
				height: 0.45rem;
				width: 100%;
				display: flex;
				h4 {
					font-weight: 400;
					font-size: 0.26rem;
					line-height: 0.45rem;
					color: #bfbfbf;
				}
				button {
					margin-left: 0.2rem;
					width: 1.2rem;
					height: 0.4rem;
					background-color: #f4f4f4;
					color: #666666;
					font-size: 0.26rem;
					border-radius: 0.2rem;
					text-align: center;
					line-height: 0.4rem;
				}
			}
			p {
				width: 100%;
				background-color: #f4f4f4;
				font-size: 0.26rem;
				line-height: 0.5rem;
				color: #333333;
				span {
					float: left;
					color: #f73a50;
					margin-right: 0.1rem;
				}
			}
			.comment-list {
				width: 100%;
				//height: 1rem;

				display: flex;
				h2 {
					font-size: 0.26rem;
					color: #f73a50;
					line-height: 0.5rem;
					margin-right: 0.2rem;
				}
				h3 {
					font-size: 0.26rem;
					color: #333333;
					line-height: 0.5rem;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}
			}
		}
		> span {
			width: 0.7rem;
			display: flex;
			float: right;
			img {
				height: 0.33rem;
			}
			h5 {
				margin-top: 0.08rem;
				margin-left: 0.08rem;
				line-height: 0.32rem;
				font-size: 0.26rem;
				color: #f73a50;
			}
		}
	}
}
.footer {
	height: 0.98rem;
	width: 7.5rem;
	position: fixed;
	bottom: 0rem;
	padding: 0.16rem 0 0.12rem 0.24rem;
	background-color: #f4f4f4;
	display: flex;
	input {
		width: 4.52rem;
		height: 0.7rem;
		background-color: #ffffff;
		border: 0.01rem solid #bfbfbf;
		border-radius: 0.04rem;
		padding-left: 0.2rem;
	}
	.icon {
		width: 0.92rem;
		height: 0.7rem;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			height: 0.44rem;
		}
	}
}
</style>


