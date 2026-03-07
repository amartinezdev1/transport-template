<script setup>
import { onMounted } from 'vue';

const props = defineProps({
	counter: [
		{
			color: String,
			description: String,
			title: String,
		},
	],
});

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
</script>

<template>
	<div class="container mt-12 lg:mt-20">
		<div
			v-for="(item, index) in props.counter"
			:key="index"
			class="flex flex-col items-center md:items-start gap-2 md:mt-4"
		>
			<h2
				class="number text-5xl lg:text-7xl font-medium"
				:class="`text-${item.color}`"
				:data-number="100"
			>
				0
			</h2>
			<p class="text-lg lg:text-xl text-white">
				{{ item.title }}
			</p>
			<p class="mt-0 lg:mt-2 text-base lg:text-lg text-white">
				{{ item.description }}
			</p>
		</div>
	</div>
</template>
