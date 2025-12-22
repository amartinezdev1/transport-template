<script setup>
import { onMounted } from 'vue';

onMounted(() => {
	const numbers = document.querySelectorAll('.number');
	const container = document.querySelector('.container');
	let hasAnimated = false;

	function isInViewport(el) {
		const rect = el.getBoundingClientRect();
		return (
			rect.top < window.innerHeight && rect.bottom > 0
		);
	}

	function animateCounters() {
		if (hasAnimated) return;
		if (container && isInViewport(container)) {
			hasAnimated = true;
			numbers.forEach((number) => {
				let start = 0;
				const end = parseInt(number.dataset.number);
				const count = setInterval(() => {
					start++;
					number.textContent = start;
					if (start === end) {
						clearInterval(count);
					}
				}, 2000 / end);
			});
		}
	}

	window.addEventListener('scroll', animateCounters);
	animateCounters();
});

const counterDetails = [
	{
		number: 100,
		textLine1: 'Travel, meeting and event experts',
		textLine2: 'Ready to support you every step of the way.',
	},
	{
		number: 200,
		textLine1: 'NPS score',
		textLine2: 'Showing our customers trust us enough to confidently recommend us.',
	},
	{
		number: 300,
		textLine1: 'CSAT score',
		textLine2: 'Reflecting our consistently high customer satisfaction.',
	},
	{
		number: 400,
		textLine1: 'Spend under management',
		textLine2: 'Boosting your buying power and control.',
	},
];
</script>

<template>
	<div class="container mx-auto">
		<div class="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
			<div
				v-for="(item, index) in counterDetails"
				:key="index"
				class="flex flex-col gap-2 items-center text-center"
			>
				<p
					class="number text-5xl lg:text-7xl text-secondary font-semibold"
					:data-number="item.number"
				>
					0
				</p>
				<p class="text-white text-base lg:text-lg font-semibold">
					{{ item.textLine1 }}
				</p>
				<p class="text-white text-base lg:text-lg ">
					{{ item.textLine2 }}
				</p>
			</div>
		</div>
	</div>
</template>
