<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const breakpoints = {
	375: { slidesPerView: 1, spaceBetween: 10 },
	768: { slidesPerView: 1.5, spaceBetween: 15 },
	1024: { slidesPerView: 2, spaceBetween: 20 },
};
</script>

<template>
	<section class="mt-8 relative overflow-hidden flex flex-col gap-16 items-center">
		<div class="container w-full mx-auto">
			<swiper
				:modules="[Navigation]"
				:slides-per-view="2"
				:breakpoints="breakpoints"
				:navigation="{
					nextEl: '.swiper-next',
					prevEl: '.swiper-prev',
				}"
				:loop="true"
				:centered-slides="true"
			>
				<swiper-slide
					v-for="n in 8"
					:key="n"
					class="w-md"
				>
					<article class="group cursor-pointer">
						<div class="overflow-hidden aspect-video mb-6">
							<img
								:src="`https://picsum.photos/640/640?random=${n}`"
								class="size-full object-cover scale-105 transition-transform duration-300 group-hover:scale-100"
							>
						</div>

						<p class="text-sm uppercase mb-2 text-gray-500">
							Solar System
						</p>

						<h3 class="text-xl font-medium leading-tight group-hover:-translate-y-1 transition-transform">
							NASA JPL Shakes Things Up Testing Future Commercial Lunar Spacecraft
						</h3>
					</article>
				</swiper-slide>
			</swiper>
		</div>
		<div class="flex gap-2">
			<UButton
				trailing-icon="i-lucide-arrow-left"
				size="xl"
				color="secondary"
				class="swiper-prev rounded-full"
			/>
			<UButton
				trailing-icon="i-lucide-arrow-right"
				size="xl"
				color="secondary"
				class="swiper-next rounded-full"
			/>
		</div>
	</section>
</template>

<style scoped>
	.mySwiper {
		overflow: visible !important;
	}

	.swiper {
		overflow: visible !important;
	}

	.swiper-wrapper {
		overflow: visible !important;
	}
</style>
