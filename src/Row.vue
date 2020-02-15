<template>
	<div class="g-row" :style="rowStyle">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'g-row',
	props: {
		gutter: {
			type: [String, Number]
		}
	},
	mounted() {
		this.$children.forEach(vm => {
			vm.gutter = this.gutter
		})
	},
	computed: {
		rowStyle() {
			return {
				marginLeft: -this.gutter / 2 + 'px',
				marginRight: -this.gutter / 2 + 'px'
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.g-row {
	display: flex;
}
</style>
