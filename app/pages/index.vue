<script setup lang="ts">
const sectionClarity = [
	{
		name: 'HeadingSection',
		props: {
			title: 'A closer look at ClarityGo & MeetingsPro',
			descripcion: 'We\'re a step ahead of most corporate travel companies - we take care of business travel and meetings, all under one roof. Our tech is built to make bookings easier, faster and more connected. Whether you\'re booking a trip, managing a meeting, or tracking spend, ClarityGo and MeetingsPro provide the tools to stay in control.',
			color: 'text-white',
		},
	},
	{
		name: 'PanelTabs',
		props: {
			class: 'mt-16',
		},
	},
];

const sectionWithClarity = [
	{
		name: 'HeadingSection',
		props: {
			title: 'Why Clarity?',
			descripcion: 'Combining cutting-edge proprietary technology with exceptional people-driven service we deliver innovative solutions with a strong focus on exceptional customer service.',
			color: 'text-white',
		},
	},
	{
		name: 'ComparisonBenefits',
		props: {
			class: 'mt-16',
		},
	},
];
</script>

<template>
	<div class="w-full">
		<PageHero />
		<UPageHero
			orientation="horizontal"
			:ui="{ container: 'border-b border-b-zinc-300/50 flex flex-col lg:grid lg:grid-cols-3' }"
		>
			<template #default>
				<div class="w-full lg:max-w-lg flex flex-col gap-4 self-start">
					<h1 class="text-4xl lg:text-5xl font-medium leading:12 lg:leading-14">
						Technology that puts people first
					</h1>
					<p class="text-base">
						Whatever your work, wherever it takes you, however you need to connect, we're with you.<br><br>With cutting-edge technology and people-driven customer service, we provide straightforward travel, meetings and event management that does the business
					</p>
				</div>
				<img
					src="https://picsum.photos/640/640?random=1"
					alt="App screenshot"
					class="rounded-lg ring ring-default"
				>
				<img
					src="https://picsum.photos/640/640?random=2"
					alt="App screenshot"
					class="rounded-lg ring ring-default"
				>
			</template>
		</UPageHero>
		<UPageHero>
			<template #default>
				<div class="w-full flex justify-between gap-12 relative">
					<h2 class="max-w-xl text-4xl lg:text-5xl font-medium leading:12 lg:leading-14">
						From eco-conscious travel and streamlined meetings to memorable events, we make it happen
					</h2>
				</div>
			</template>
		</UPageHero>
		<LazyHeroDarkSection
			:components="sectionClarity"
			hydrate-on-visible
		/>
		<div class="w-full bg-[#F6F6F6]">
			<UPageHero>
				<template #default>
					<div class="w-full lg:max-w-(--ui-container) flex flex-col gap-8 lg:gap-16">
						<HeadingSection
							title="Specialist industries we know inside out"
							descripcion="We bring deep sector knowledge to support your travel and meetings, whatever your industry’s unique demands and challenges."
							orientation="left"
						/>
						<LazySwiperVertical hydrate-on-visible />
					</div>
				</template>
			</UPageHero>
		</div>
		<LazyHeroDarkSection
			:components="sectionWithClarity"
			hydrate-on-visible
		/>
	</div>
</template>
