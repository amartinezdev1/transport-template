<script setup lang="ts">
const { items } = defineProps<{
	items: Array<{
		label: string;
		slot: string;
		component: string;
		accordion?: Array<{
			label: string;
			title: string;
			content: string;
		}>;
		image: string;
	}>;
}>();
</script>

<template>
	<UTabs
		class="mt-16"
		:items="items"
		:ui="{
			list: 'w-xs sm:w-sm h-14 mb-12 rounded-full border border-[#424343] bg-[#2d2e2e]',
			indicator: 'rounded-full bg-secondary',
			label: 'text-white text-base md:text-lg font-medium',
		}"
	>
		<template
			v-for="(item, index) in items"
			:key="index"
			#[item.slot]
		>
			<div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
				<component
					:is="item.component"
					:accordion="item.accordion"
				/>
				<img
					:src="item.image"
					class="rounded-3xl"
				>
			</div>
		</template>
	</UTabs>
</template>
