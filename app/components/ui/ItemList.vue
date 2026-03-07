<script setup lang="ts">
const { color, icon, text, size } = defineProps<{
	color: string;
	icon: string;
	text: string;
	size: 'sm' | 'md' | 'lg';
}>();

const textSize = {
	sm: 'text-base md:text-lg leading-7',
	md: 'text-lg md:text-xl leading-8',
	lg: 'text-xl md:text-2xl leading-9',
};

const iconSize = {
	sm: 'size-6',
	md: 'size-6 md:size-8',
	lg: 'size-8 md:size-10',
};
</script>

<template>
	<div class="flex gap-4 items-center">
		<UIcon
			:name="icon"
			:class="iconSize[size]"
			:style="`color: ${color}`"
		/>
		<p :class="[`text-${color}`, textSize[size]]">
			{{ text }}
		</p>
	</div>
</template>
