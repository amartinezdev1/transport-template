<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const { accordion } = defineProps<{
	accordion: Array<{
		content: string;
		label: string;
		title: string;
	}>;
}>();

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
		active.value = String((Number(active.value) + 1) % accordion.length);
	}, 5000);
});
</script>

<template>
	<UAccordion
		v-model="active"
		:items="accordion"
		trailing-icon="i-lucide-plus"
		:ui="{
			label: 'text-lg md:text-xl text-[#d0d1d1]',
			trailingIcon: 'text-white',
			item: 'data-[state=open]:border-0',
		}"
		class="mt-16"
	>
		<template #body="{ item }">
			<div class="flex flex-col gap-4">
				<h2 class="mt-8 text-xl md:text-3xl font-medium text-white">
					{{ item.title }}
				</h2>
				<p class="text-base md:text-lg text-[#d0d1d1]">
					{{ item.content }}
				</p>
				<UProgress
					:model-value="progress"
					color="secondary"
					size="sm"
				/>
			</div>
		</template>
	</UAccordion>
</template>
