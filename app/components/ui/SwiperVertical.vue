<script setup>
import { onMounted, ref } from 'vue';

const slideshowRef = ref(null);
const trackRef = ref(null);

const images = [
	'https://picsum.photos/800/1000?random=1',
	'https://picsum.photos/800/1000?random=2',
	'https://picsum.photos/800/1000?random=3',
];

onMounted(async () => {
	const gsap = (await import('gsap')).default;
	const { ScrollTrigger } = await import('gsap/ScrollTrigger');
	gsap.registerPlugin(ScrollTrigger);

	const slides = trackRef.value.children;
	const slideHeight = slideshowRef.value.offsetHeight;

	gsap.to(trackRef.value, {
		y: -(slideHeight * (slides.length - 1)),
		ease: 'none',
		scrollTrigger: {
			trigger: slideshowRef.value,
			start: 'top top',
			end: () => `+=${slideHeight * slides.length}`,
			scrub: true,
			pin: true,
		},
	});
});
</script>

<template>
	<section class="w-full flex justify-center">
		<div class="w-full max-w-5xl mx-auto px-4 py-24">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
				<!-- Texto sticky (esto sí puede ser sticky) -->
				<div class="sticky top-24 text-3xl lg:text-5xl font-semibold leading-tight">
					<p>
						From eco-conscious travel and streamlined meetings to memorable events, we make it happen
					</p>
				</div>

				<!-- SLIDESHOW -->
				<div
					ref="slideshowRef"
					class="relative h-[70vh] overflow-hidden rounded-xl shadow-lg"
				>
					<div
						ref="trackRef"
						class="absolute inset-0 flex flex-col"
					>
						<div
							v-for="(image, index) in images"
							:key="index"
							class="h-[70vh] w-full shrink-0"
						>
							<img
								:src="image"
								class="w-full h-full object-cover"
								loading="lazy"
								alt=""
							>
						</div>
					</div>
				</div>
			</div>

			<!-- scroll real -->
			<div class="h-[200vh]" />
		</div>
	</section>
</template>
