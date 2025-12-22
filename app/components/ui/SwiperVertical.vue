<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const modules = [Navigation];

const breakpoints = {
	375: { slidesPerView: 1, spaceBetween: 10 },
	768: { slidesPerView: 2, spaceBetween: 15 },
	1024: { slidesPerView: 3, spaceBetween: 20 },
	1280: { slidesPerView: 4, spaceBetween: 20 },
};

const images = [
	'https://picsum.photos/640/640?random=1',
	'https://picsum.photos/640/640?random=2',
	'https://picsum.photos/640/640?random=3',
	'https://picsum.photos/640/640?random=4',
	'https://picsum.photos/640/640?random=5',
	'https://picsum.photos/640/640?random=6',
	'https://picsum.photos/640/640?random=7',
	'https://picsum.photos/640/640?random=8',
	'https://picsum.photos/640/640?random=9',
];
</script>

<template>
	<swiper
		:space-between="30"
		:modules="modules"
		:breakpoints="breakpoints"
		:navigation="true"
	>
		<swiper-slide
			v-for="(image, index) in images"
			:key="index"
		>
			<img
				:src="image"
				alt=""
				class="rounded-3xl"
			>
		</swiper-slide>
	</swiper>
</template>

<style scoped>
	.swiper {
		width: 100%;
		max-width: 1376px;
		height: 500px;
	}

	.swiper-slide {
		text-align: center;
		/* Center slide text vertically */
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.swiper-slide img {
		width: 100%;
		height: 100%;
		display: block;      /* Evita espacios extra debajo de la imagen */
		object-fit: cover;   /* Importante: llena el espacio sin deformarse */
	}

	@media (max-width: 1280px) {
		.swiper {
			width: 100%;
			max-width: 1216px;
		}
	}

	@media (max-width: 1024px) {
		.swiper {
			width: 100%;
			max-width: 960px;
		}
	}

	@media (max-width: 768px) {
		.swiper {
			width: 100%;
			max-width: 704px;
		}
	}

	@media (max-width: 425px) {
		.swiper {
			width: 100%;
			max-width: 393px;
		}
	}

	@media (max-width: 375px) {
		.swiper {
			width: 100%;
			max-width: 343px;
		}
	}
</style>
