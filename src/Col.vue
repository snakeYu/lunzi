<template>
	<div class="g-col" :class="colClass" :style="colStyle">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'g-col',
	props: {
		span: {
			type: [String, Number]
		},
		offset: [String, Number]
	},
	data() {
		return {
			gutter: ''
		}
	},
	computed: {
		colStyle() {
			return {
				paddingLeft: this.gutter / 2 + 'px',
				paddingRight: this.gutter / 2 + 'px'
			}
		},
		colClass() {
			return [
				this.span && `col-${this.span}`,
				this.offset && `offset-${this.offset}`
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.g-col {
	$class-pre: col-;
	@for $n from 1 through 24 {
		&.#{$class-pre}#{$n} {
			width: ($n/24) * 100%;
		}
	}
	$class-pre: offset-;
	@for $n from 1 through 24 {
		&.#{$class-pre}#{$n} {
			margin-left: ($n/24) * 100%;
		}
	}
}
</style>
