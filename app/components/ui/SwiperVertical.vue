<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const breakpoints = {
	375: { slidesPerView: 1, spaceBetween: 10 },
	768: { slidesPerView: 1, spaceBetween: 15 },
	1024: { slidesPerView: 2, spaceBetween: 20 },
	1280: { slidesPerView: 4, spaceBetween: 20 },
};

const modules = [Navigation];
</script>

<template>
	<ClientOnly>
		<div class="container">
			<Swiper
				:space-between="30"
				:breakpoints="breakpoints"
				:modules="modules"
				:navigation="true"
			>
				<SwiperSlide>
					<img
						src="https://picsum.photos/640/640?random=11"
						alt=""
						class="rounded-xl"
					>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://picsum.photos/640/640?random=12"
						alt=""
						class="rounded-xl"
					>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://picsum.photos/640/640?random=13"
						alt=""
						class="rounded-xl"
					>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://picsum.photos/640/640?random=14"
						alt=""
						class="rounded-xl"
					>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://picsum.photos/640/640?random=15"
						alt=""
						class="rounded-xl"
					>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://picsum.photos/640/640?random=16"
						alt=""
						class="rounded-xl"
					>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://picsum.photos/640/640?random=17"
						alt=""
						class="rounded-xl"
					>
				</SwiperSlide>
			</Swiper>
		</div>
	</ClientOnly>
</template>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.container {
		width: 100%;
		margin: 0 auto;
	}

	.swiper {
		width: 100%;
		height: 500px;
		overflow: hidden;
	}

	.swiper-slide img {
		width: 100%;
		height: 100%;
		display: block;      /* Evita espacios extra debajo de la imagen */
		object-fit: cover;   /* Importante: llena el espacio sin deformarse */
	}

	@media (max-width: 1024px) {
		.container {
			max-width: 960px; /* O el ancho que desees para desktop */
			margin: 0 auto;   /* Centra el contenedor */
			overflow: hidden; /* Esto es clave para evitar que Swiper desborde la pantalla */
		}

		.swiper {
			width: 100%;
		}
	}
</style>
