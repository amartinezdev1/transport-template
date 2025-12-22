<script setup lang="ts">
const { title, descripcion, orientation = 'center', color = 'text-black' } = defineProps<{
	title: string;
	descripcion: string;
	orientation?: string;
	color?: string;
}>();
</script>

<template>
	<section
		class="flex flex-col gap-4"
		:class="color"
	>
		<h2
			class="w-full text-4xl lg:text-5xl font-medium leading:12 lg:leading-14"
			:class="orientation == 'center' ? 'mx-auto text-center lg:max-w-4xl' : 'lg:max-w-xl'"
		>
			{{ title }}
		</h2>
		<p
			class="w-full lg:max-w-3xl text-base lg:text-lg"
			:class="orientation == 'center' ? 'mx-auto text-center lg:max-w-3xl' : 'lg:max-w-xl'"
		>
			{{ descripcion }}
		</p>
	</section>
</template>
