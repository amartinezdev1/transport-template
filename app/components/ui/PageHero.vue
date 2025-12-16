<script setup lang="ts">
/* const items = [
	'https://picsum.photos/seed/picsum/1920/1280',
]; */
</script>

<template>
	<div
		class="w-full h-[75vh] bg-[url(https://picsum.photos/seed/picsum/1920/1280)] flex items-center"
	>
		<div class="w-full lg:max-w-(--ui-container) mx-auto px-4 lg:px-8 flex flex-col items-start gap-8">
			<h1 class="max-w-xl text-6xl text-white font-medium leading-16">
				Travel and meetings management that does the business
			</h1>
			<UButton
				icon="i-lucide-play"
				size="lg"
				variant="solid"
				class="bg-yellow-400 rounded-full px-6 py-3 text-base"
			>
				Play Video
			</UButton>
		</div>
	</div>
</template>
