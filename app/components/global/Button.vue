<script setup lang="ts">
const { title, icon } = defineProps<{
	title: string;
	icon: string;
}>();
</script>

<template>
	<div class="bg-secondary px-6 py-2 rounded-full cursor-pointer flex items-center gap-1.5">
		<UIcon
			:name="icon"
			class="size-5"
		/>
		<p class="text-white text-base lg:text-lg font-medium">
			{{ title }}
		</p>
	</div>
</template>
