<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui';

const items = [
	{
		label: 'ClarityGo',
		slot: 'account' as const,
	},
	{
		label: 'MeetingsPro',
		slot: 'password' as const,
	},
] satisfies TabsItem[];
</script>

<template>
	<UTabs
		:items="items"
		variant="link"
		:ui="{ list: 'bg-[#2d2e2e] w-auto p-3 rounded-full border-0 gap-2', trigger: 'grow px-8 py-3 rounded-full data-[state=active]:bg-[#0B58A4] data-[state=active]:text-white text-base', indicator: 'hidden' }"
		class="gap-4 w-full"
	>
		<template #account>
			<div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 size-full">
				<SplitAccordion />
				<NuxtImg
					src="https://picsum.photos/640/640?random=8"
					class="min-w-full rounded-3xl"
				/>
			</div>
		</template>

		<template #password>
			<div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 size-full">
				<SplitAccordion />
				<NuxtImg
					src="https://picsum.photos/640/640?random=9"
					class="min-w-full rounded-3xl"
				/>
			</div>
		</template>
	</UTabs>
</template>
