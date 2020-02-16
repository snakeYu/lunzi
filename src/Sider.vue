<template>
	<transition name="fade">
		<div class="g-sider" v-if="visible">
			<slot></slot>
			<button @click="visible = false">隐藏</button>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'g-sider',
	data() {
		return {
			visible: true
		}
	}
}
</script>

<style lang="scss" scoped>
.g-sider {
	position: relative;
	> button {
		position: absolute;
		top: 0;
		right: 0;
	}
}
.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s;
}
.fade-enter-to,
.fade-leave-to {
	margin-left: -200px;
}
</style>
