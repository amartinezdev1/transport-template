<script setup lang="ts">
const { align, width, title, paragraph, size, color } = defineProps<{
	align: 'left' | 'center' | 'right';
	width: 'sm' | 'md' | 'lg';
	size: 'sm' | 'md' | 'lg';
	color?: string;
	title: string;
	paragraph?: string;
}>();

const headingAlign = align === 'center' ? 'text-center items-center' : align === 'right' ? 'text-right items-end' : 'text-left items-start';
const headingWidth = width === 'sm' ? 'max-w-md' : width === 'md' ? 'max-w-xl' : 'max-w-5xl';

const headingSize = {
	sm: 'text-base md:text-lg leading-5 md:leading-6',
	md: 'text-3xl md:text-5xl leading-9 md:leading-14',
	lg: 'text-5xl md:text-7xl leading-14 md:leading-20',
};
</script>

<template>
	<div
		class="w-full flex flex-col"
		:class="headingAlign"
	>
		<div
			class="w-full"
			:class="headingWidth"
		>
			<h1
				class="mb-6 font-medium"
				:class="[headingSize[size], `text-${color}`]"
			>
				{{ title }}
			</h1>
			<p
				:class="[`text-${color}`]"
				class="text-base md:text-lg leading-7"
				v-html="paragraph"
			/>
		</div>
	</div>
</template>
