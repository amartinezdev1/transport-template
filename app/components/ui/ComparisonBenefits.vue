<script setup lang="ts">
const comparison = [
	{
		title: 'Without Clarity',
		items: [
			'Disconnected systems for booking business travel and meetings',
			'Manual approval processes slowing down decision-making',
			'Hidden travel costs and poor visibility over budgets',
			'No centralised way to manage event venues, attendees, and logistics',
			'Limited support, leaving teams to handle issues on their own',
		],
		icon: 'lucide:x',
		class: 'text-white ring-0',
		leadingIcon: 'size-8',
		sectionClass: '',
	},
	{
		title: 'With Clarity',
		items: [
			'Seamless booking and management for business travel, meetings, and events',
			'24/7 expert support for travellers, bookers, and event managers',
			'One centralised tool for booking flights, hotels, rail, ground, and venues',
			'Real-time visibility of spend, sustainability, and traveller trends',
			'Automated approvals and policy controls to keep spending in check',
		],
		icon: 'lucide:check',
		class: 'text-white ring-0',
		leadingIcon: 'size-8 text-secondary',
		sectionClass: 'border-4 border-secondary',
	},
];
</script>

<template>
	<section class="w-full">
		<div class="w-full mt-12 grid grid-cols-1 lg:grid-cols-2 items-stretch gap-8">
			<div
				v-for="(item, index) in comparison"
				:key="index"
				class="w-full flex flex-col items-center gap-8"
			>
				<UBadge
					:icon="item.icon"
					size="xl"
					variant="outline"
					:class="item.class"
					class="text-xl lg:text-2xl"
					:ui="{ leadingIcon: item.leadingIcon }"
				>
					{{ item.title }}
				</UBadge>
				<div
					class="size-full p-4 lg:p-6 rounded-xl bg-[#2d2e2e] flex flex-col gap-8"
					:class="item.sectionClass"
				>
					<UBadge
						v-for="(description, key) in item.items"
						:key="key"
						:icon="item.icon"
						size="xl"
						variant="outline"
						:class="item.class"
						class="text-base lg:text-lg"
						:ui="{ leadingIcon: item.leadingIcon }"
					>
						{{ description }}
					</UBadge>
				</div>
			</div>
		</div>
	</section>
</template>
