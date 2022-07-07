<template>
	<div class="products">
		<div class="products-list">
			<div class="products-item" v-for="(item, i) in products" v-bind:key="i">
				<VueSlickCarousel :arrows="false" :dots="true">
					<div v-for="(image, idx) in item.images" v-bind:key="idx">
						<img :src="image" />
					</div>
				</VueSlickCarousel>
				<div class="products-item-body">
					<div class="products-item-mid">
						<h4 class="title">{{ item.name }}</h4>
						<div class="price">
							<div class="offer-price">{{ item.price.offerPriceDisplay }}</div>
							<div
								class="original-price"
								v-if="item.price.strikeThroughPriceDisplay"
							>
								<span>{{ item.price.strikeThroughPriceDisplay }}</span>
								<span class="offer">{{ item.price.discount }}%</span>
							</div>
						</div>
						<div class="location" v-if="item.location">
							<img
								class="icon"
								:src="item.badge.merchantBadgeUrl"
								v-if="item.badge.merchantBadge"
							/><span class="location">{{ item.location }}</span>
						</div>
						<div class="review" v-if="item.review.rating">
							<img class="icon" src="../assets/star.png" />
							<span class="rating">{{ item.review.absoluteRating }}</span>
							<span class="total-rating-count">({{ item.review.count }})</span>
						</div>
					</div>
					<div class="products-item-footer">
						<button>Get Details</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
	name: "ProductList",
	data() {
		return {};
	},
	props: {
		products: {
			type: Array,
			default() {
				return [];
			},
		},
		nextSetData: {
			type: Function,
			default: () => {},
		},
	},
	components: {
		VueSlickCarousel,
	},
	mounted() {
		window.onscroll = () => {
			let bottomOfWindow =
				document.documentElement.scrollTop + window.innerHeight >
				document.documentElement.offsetHeight - 500;
			if (bottomOfWindow) {
        this.nextSetData();
			}
		};
	},
	watch: {
		products() {
			this.products.map((e) => console.log(e));
		},
	},
	methods: {},
};
</script>
<style lang="scss" scoped>
::v-deep .slick-slider {
	position: relative;
	.slick-dots {
		position: absolute;
		bottom: 0;
	}
}
.products {
	width: 100%;
	max-width: 1320px;
	margin: 0 auto;
	&-list {
		display: flex;
		flex-wrap: wrap;
		padding: 15px;
	}
	&-item {
		width: calc(100% / 3 - 20px);
		margin: 20px 10px 0;
		background: #fff;
		border-radius: 15px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		&-body {
			padding: 20px;
			text-align: left;
			display: flex;
			flex-direction: column;
			flex: 1;
		}
		&-mid {
			flex: 1;
			.title {
				margin: 5px 0 10px;
			}
			.price {
				font-weight: 600;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				.offer-price {
					display: block;
					font-size: 20px;
					color: #f37220;
				}
				.original-price {
					font-size: 14px;
					color: #999999;
					span {
						text-decoration: line-through;
					}
					.offer {
						margin-left: 8px;
						padding: 5px 10px;
						border-radius: 10px;
						background: #ffdedf;
						color: #d90501;
						text-decoration: none;
					}
				}
			}
			.icon {
				width: 20px;
				height: 20px;
				margin-right: 10px;
			}
			> div {
				margin-top: 5px;
				display: flex;
				align-items: center;
			}
		}

		&-footer {
			margin-top: 30px;
			button {
				color: white;
				padding: 10px 20px;
				width: 100%;
				border-radius: 10px;
				background-color: #0095d9;
				font-size: 18px;
				border: 0;
				box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 10px -2px;
			}
		}
	}
}
</style>
