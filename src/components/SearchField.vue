<template>
	<div class="search">
		<div class="search-wrapper">
			<div class="search-input">
				<input
					v-model="searchTerm"
					@keydown="
						(e) => {
							const key = e.which || e.code;
							key === 13 && searchEvent(searchTerm);
						}
					"
				/>
				<span class="search-input-icon" @click="searchTerm = ''"></span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "SearchField",
	data() {
		return {
			searchTerm: "",
		};
	},
	props: {
		searchEvent: {
			type: Function,
		},
	},
	created() {},
};
</script>
<style lang="scss" scoped>
.search {
	display: flex;
	align-items: flex-start;
	padding: 20px;
	background: white;
	width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 15px -5px;
	&-wrapper {
    width: 100%;
    max-width: 1320px;
    padding: 0 25px;
    margin: 0 auto;
    text-align: left;
	}
	&-input {
		display: inline-flex;
		min-width: 300px;
		position: relative;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		border-radius: 10px;
		overflow: hidden;
		input {
			width: 100%;
			border: 0;
			padding: 15px 20px;
			background-color: #f1f1f1;
			outline: none;
			font-size: 16px;
		}
		&-icon {
			width: 20px;
			height: 20px;
			position: absolute;
			right: 10px;
			top: 50%;
			transform: translateY(-50%);
			cursor: pointer;
			&::after {
				content: "";
				width: 100%;
				height: 100%;
				background-image: url("../assets/close_circled_icon.png");
				background-size: contain;
				background-repeat: no-repeat;
				display: block;
			}
		}
	}
}
</style>
