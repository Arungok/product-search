<template>
	<div class="product-search">
		<div class="loader" v-if="loader">
			<img src="../assets/fidget.gif" />
		</div>
		<Search
			:searchEvent="
				(val) => {
					pageNumber = 0;
					searchTerm = val;
					getProducts();
				}
			"
		/>
		<Listing :products="data" :nextSetData="getNextSetData" />
	</div>
</template>
<script>
import Search from "./SearchField.vue";
import { productSearch } from "../utils/utils";
import Listing from "./Listing.vue";
export default {
	name: "ProductSearch",
	data() {
		return {
			searchTerm: null,
			data: [],
			loader: false,
			appendData: false,
			pageNumber: 0,
			callLoopFlg: true,
		};
	},
	components: { Search, Listing },
	methods: {
		getProducts(append = false) {
			this.callLoopFlg = false;
			this.pageNumber += 1;
			this.appendData = append;
			this.loader = true;
			productSearch({
				searchTerm: this.searchTerm,
				start: this.pageNumber,
				itemPerPage: 24,
			})
				.then((response) => {
					setTimeout(() => {
						this.loader = false;
					}, 1500);
					this.callLoopFlg = true;
					if (response.status === 200) {
						this.data =
							response.data && response.data.data && response.data.data.products
								? [...(this.appendData ? this.data : []), ...response.data.data.products]
								: this.data;
					}
				})
				.catch((error) => {
					this.loader = true;
					console.error(error);
				});
		},
		getNextSetData() {
			if (this.callLoopFlg) {
				this.getProducts(true);
			}
		},
	},
};
</script>
<style lang="scss" scoped>
.loader {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
	img {
		max-width: 128px;
	}
}
</style>
