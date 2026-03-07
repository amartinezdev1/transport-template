<script setup>
const specialistSection = [
	{
		component: 'Heading',
		props: {
			align: 'left',
			width: 'sm',
			size: 'md',
			title: 'Technology that puts people first',
			paragraph: `Whatever your work, wherever it takes you, however you need to connect, we're with you.<br><br>With cutting-edge technology and people-driven customer service, we provide straightforward travel, meetings and event management that does the business.`,
		},
	},
];

const solutionsSection = [
	{
		component: 'Heading',
		props: {
			align: 'center',
			width: 'lg',
			size: 'md',
			color: 'white',
			title: 'A closer look at ClarityGo & MeetingsPro',
			paragraph: `We're a step ahead of most corporate travel companies - we take care of business travel and meetings, all under one roof. Our tech is built to make bookings easier, faster and more connected. Whether you’re booking a trip, managing a meeting, or tracking spend, ClarityGo and MeetingsPro provide the tools to stay in control.`,
		},
	},
	{
		component: 'Tabs',
		props: {
			items: [
				{
					label: 'ClarityGo',
					slot: 'clarity',
					component: 'Accordion',
					accordion: [
						{
							label: 'Search & Book',
							title: 'Fast, confident booking in one place',
							content: 'Add your meeting details, choose your location, set your requirements, and get instant venue options – fast, easy and all in one place.',
						},
						{
							label: 'Accessible',
							title: 'Inclusive by design',
							content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
						},
						{
							label: 'Personalised',
							title: 'Travel experiences tailored to you',
							content: 'Add your meeting details, choose your location, set your requirements, and get instant venue options – fast, easy and all in one place.',
						},
						{
							label: 'Trip management',
							title: 'Manage your travel and trips, all in one place',
							content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
						},
						{
							label: 'Report',
							title: 'Smarter insights, informed decisions',
							content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
						},
						{
							label: 'Support',
							title: 'We\'re with you, 24/7/365',
							content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
						},
					],
					image: 'https://picsum.photos/seed/picsum/600/600',
				},
				{
					label: 'MeetingsPro',
					slot: 'meetings',
					component: 'Accordion',
					accordion: [
						{
							label: 'Search & Book',
							title: 'Fast, confident booking in one place',
							content: 'Add your meeting details, choose your location, set your requirements, and get instant venue options – fast, easy and all in one place.',
						},
						{
							label: 'Accessible',
							title: 'Inclusive by design',
							content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
						},
						{
							label: 'Personalised',
							title: 'Travel experiences tailored to you',
							content: 'Add your meeting details, choose your location, set your requirements, and get instant venue options – fast, easy and all in one place.',
						},
						{
							label: 'Trip management',
							title: 'Manage your travel and trips, all in one place',
							content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
						},
						{
							label: 'Report',
							title: 'Smarter insights, informed decisions',
							content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
						},
						{
							label: 'Support',
							title: 'We\'re with you, 24/7/365',
							content: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
						},
					],
					image: 'https://picsum.photos/seed/picsum/600/600',
				},
			],
		},
	},
];

const aboutSection = [
	{
		component: 'Heading',
		props: {
			align: 'center',
			width: 'md',
			size: 'md',
			color: 'white',
			title: 'Why Clarity?',
			paragraph: 'Combining cutting-edge proprietary technology with exceptional people-driven service we deliver innovative solutions with a strong focus on exceptional customer service.',
		},
	},
	{
		component: 'Comparison',
		props: {
			comparison: [
				{
					title: {
						color: 'white',
						icon: 'i-lucide-x',
						size: 'lg',
						text: 'Without Clarity',
					},
					list: [

						'Disconnected systems for booking business travel and meetings',
						'Manual approval processes slowing down decision-making',
						'Hidden travel costs and poor visibility over budgets',
						'No centralised way to manage event venues, attendees, and logistics',
						'Limited support, leaving teams to handle issues on their own',

					],
				},
				{
					title: {
						color: 'white',
						icon: 'i-lucide-check',
						size: 'lg',
						text: 'With Clarity',
					},
					list: [
						'Seamless booking and management for business travel, meetings, and events',
						'24/7 expert support for travellers, bookers, and event managers',
						'One centralised tool for booking flights, hotels, rail, ground, and venues',
						'Real-time visibility of spend, sustainability, and traveller trends',
						'Automated approvals and policy controls to keep spending in check',
					],
				},
			],
		},
		style: 'w-full mx-auto flex flex-col lg:flex-row justify-center gap-4',
	},
	{
		component: 'Counter',
		props: {
			counter: [
				{
					color: 'white',
					description: 'Ready to support you every step of the way.',
					title: 'Travel, meeting and event experts',
				},
				{
					color: 'white',
					description: 'Ready to support you every step of the way.',
					title: 'Travel, meeting and event experts',
				},
				{
					color: 'white',
					description: 'Ready to support you every step of the way.',
					title: 'Travel, meeting and event experts',
				},
				{
					color: 'white',
					description: 'Ready to support you every step of the way.',
					title: 'Travel, meeting and event experts',
				},
			],
		},
		style: 'w-full mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start',
	},
];

const industriesSection = [
	{
		component: 'Heading',
		props: {
			align: 'left',
			width: 'md',
			size: 'md',
			title: 'Specialist industries we know inside out',
			paragraph: 'We bring deep sector knowledge to support your travel and meetings, whatever your industry’s unique demands and challenges.',
		},
	},
];

const servicesItems = [
	{
		id: 1,
		label: '01',
		title: 'Travel',
		text: 'Getting you where you need to be, safely and securely. From flights to ground transport, our expert-led corporate travel management ensures smooth, stress-free journeys while keeping costs under control.',
		cta: 'Go to travel services',
		image: 'https://cdn.prod.website-files.com/683ec44242f0f35750675d4b/687e1d337a119ee731a8f298_8a583186cc4df0386d7a6579840725f1_Travel-Personontrain.avif',
	},
	{
		id: 2,
		label: '02',
		title: 'Meetings',
		text: 'From venue sourcing to full meeting management, we ve got you. We handle planning, budgeting, and approvals, making it easy to organise seamless, well-managed meetings.',
		cta: 'Go to meeting services',
		image: 'https://cdn.prod.website-files.com/683ec44242f0f35750675d4b/68834f842197715430bb7f2a_35a695e0a3c63727f1d13d58e56910b3_Collaborative%20Office%20Meeting%20-%20cropped.avif',
	},
	{
		id: 3,
		label: '03',
		title: 'Events',
		text: 'Extraordinary, immersive experiences that last beyond the moment. Whether it\'s a conference, incentive trip or large-scale event, we take care of the logistics, so you can focus on the experience.',
		cta: 'Go to event services',
		image: 'https://cdn.prod.website-files.com/683ec44242f0f35750675d4b/685aa7636261e83391bdb09f_iStock-516396736-min.avif',
	},
];
</script>

<template>
	<main>
		<Banner />

		<Section
			:components="specialistSection"
			color="white"
		/>

		<SwiperScroll
			:items="servicesItems"
			class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40"
		/>

		<Section
			:components="solutionsSection"
			color="black"
		/>

		<Section
			:components="industriesSection"
			color="white"
		/>

		<Section
			:components="aboutSection"
			color="black"
		/>
	</main>
</template>
