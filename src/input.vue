<template>
	<div class="wrapper" :class="{ error }">
		<input
			:value="value"
			:disabled="disabled"
			:readonly="readonly"
			type="text"
			@change="$emit('change', $event.target.value)"
			@blur="$emit('blur', $event.target.value)"
			@focus="$emit('focus', $event.target.value)"
			@input="$emit('input', $event.target.value)"
		/>
		<template v-if="error">
			<g-icon class="icon-error" name="error"></g-icon>
			<span class="errorMessage">{{ error }}</span>
		</template>
	</div>
</template>

<script>
import Icon from './icon'
export default {
	name: 'g-input',
	components: {
		'g-icon': Icon
	},
	name: 'g-input',
	props: {
		value: {
			type: String
		},
		disabled: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		error: {
			type: String
		}
	}
}
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$red: #f1453d;
.wrapper {
	font-size: $font-size;
	display: inline-flex;
	align-items: center;
	> :not(:last-child) {
		margin-right: 5px;
	}
	> input {
		height: 32px;
		border: 1px solid $border-color;
		border-radius: $border-radius;
		padding: 0 8px;
		font-size: inherit;
		&:hover {
			border-color: $border-color-hover;
		}
		&:focus {
			box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
			outline: none;
		}
		&[disabled],
		&[readonly] {
			border-color: #bbb;
			color: #bbb;
			cursor: not-allowed;
		}
	}
	&.error {
		> input {
			border-color: $red;
		}
	}
	.icon-error {
		fill: red;
	}
	.errorMessage {
		color: red;
	}
}
</style>
