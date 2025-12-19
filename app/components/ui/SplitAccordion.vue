<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui';
import { ref, onMounted, watch } from 'vue';

const items: AccordionItem[] = [
	{
		label: 'Search & Book',
		content: 'Add your meeting details, choose your location, set your requirements, and get instant venue options – fast, easy and all in one place.',
	},
	{
		label: 'Colors',
		content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
	},
	{
		label: 'Components',
		content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
	},
	{
		label: 'Search & Book',
		content: 'Add your meeting details, choose your location, set your requirements, and get instant venue options – fast, easy and all in one place.',
	},
	{
		label: 'Colors',
		content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
	},
];

const active = ref('0');
const progress = ref(0);
let progressInterval: ReturnType<typeof setInterval> | null = null;

function startProgress() {
	progress.value = 0;
	if (progressInterval) clearInterval(progressInterval);
	progressInterval = setInterval(() => {
		if (progress.value < 100) {
			progress.value += 2;
		}
		else {
			progress.value = 100;
			if (progressInterval) clearInterval(progressInterval);
		}
	}, 100);
}

watch(active, () => {
	startProgress();
});

onMounted(() => {
	startProgress();
});

// Note: This is for demonstration purposes only. Don't do this at home.
onMounted(() => {
	setInterval(() => {
		active.value = String((Number(active.value) + 1) % items.length);
	}, 5000);
});
</script>

<template>
	<UAccordion
		v-model="active"
		:items="items"
		:ui="{
			root: 'max-h-1/2 h-auto',
			body: 'pb-6 data-[state=open]:border-none',
			item: 'flex flex-col gap-16 data-[state=open]:text-white data-[state=closed]:text-[#646565] data-[state=open]:border-none',
			label: 'text-xl',
			trigger: '',
			trailingIcon: 'hidden',
		}"
	>
		<template #body="{ item }">
			<div class="flex flex-col gap-4">
				<h3 class="text-3xl">
					Find it. Book it. Done.
				</h3>
				<p class="text-lg">
					{{ item.content }}
				</p>
			</div>
			<UProgress
				size="sm"
				class="mt-4"
				color="secondary"
				:model-value="progress"
			/>
		</template>
	</UAccordion>
</template>
