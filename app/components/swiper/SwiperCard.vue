<script setup lang="ts">
const { image, title, description } = defineProps<{
	image: string;
	title: string;
	description: string;
}>();

const isVisible = ref(false);
</script>

<template>
	<div
		class="w-full max-w-sm h-120 p-6 flex flex-col justify-end cursor-pointer bg-[url(https://picsum.photos/seed/picsum/480/480)]"
		:class="[`bg-[url(${image})] bg-cover rounded-xl`]"
		@mouseenter="isVisible = true"
		@mouseleave="isVisible = false"
	>
		<div
			class="p-4 rounded-lg flex flex-col items-start gap-4 transition-all duration-300 ease-in"
			:class="[isVisible ? 'bg-secondary': 'bg-white']"
		>
			<h1 class="text-lg md:text-2xl font-medium">
				{{ title }}
			</h1>
			<p
				v-if="isVisible"
				class="text-base text-left"
			>
				{{ description }}
			</p>
		</div>
	</div>
</template>
