<script setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';

function playAnimation(shape) {
	// the timeline
	const tl = gsap.timeline();
	tl.from(shape, {
		opacity: 0,
		scale: 0,
		ease: 'elastic.out(1,0.3)',
	})
		.to(shape, {
			rotation: 'random([-360, 360])',
		}, '<')
		.to(shape, {
			y: '120vh',
			ease: 'back.in(.4)',
			duration: 1,
		}, 0);
}

onMounted(() => {
	const flair = gsap.utils.toArray('.flair');
	const gap = 100;
	let index = 0;
	const wrapper = gsap.utils.wrap(0, flair.length);
	gsap.defaults({ duration: 1 });

	let mousePos = { x: 0, y: 0 };
	let lastMousePos = mousePos;
	const cachedMousePos = { ...mousePos };

	window.addEventListener('mousemove', (e) => {
		mousePos = {
			x: e.x,
			y: e.y,
		};
	});

	gsap.ticker.add(ImageTrail);

	function ImageTrail() {
		const travelDistance = Math.hypot(
			lastMousePos.x - mousePos.x,
			lastMousePos.y - mousePos.y,
		);

		// keep the previous mouse position for animation
		cachedMousePos.x = gsap.utils.interpolate(
			cachedMousePos.x || mousePos.x,
			mousePos.x,
			0.1,
		);
		cachedMousePos.y = gsap.utils.interpolate(
			cachedMousePos.y || mousePos.y,
			mousePos.y,
			0.1,
		);

		if (travelDistance > gap) {
			animateImage();
			lastMousePos = mousePos;
		}
	}

	function animateImage() {
		const wrappedIndex = wrapper(index);

		console.log(index, flair.length);

		const img = flair[wrappedIndex];
		gsap.killTweensOf(img);

		gsap.set(img, {
			clearProps: 'all',
		});

		gsap.set(img, {
			opacity: 1,
			left: mousePos.x,
			top: mousePos.y,
			xPercent: -50,
			yPercent: -50,
		});

		playAnimation(img);

		index++;
	}
});
</script>

<template>
	<div>
		<div class="content">
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-1.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-2.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-3.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-4.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-5.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-6.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-7.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-8.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-1.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-2.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-3.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-4.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-5.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-6.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-7.png"
				alt=""
			>
			<img
				class="flair"
				src="https://assets.codepen.io/16327/Revised+Flair-8.png"
				alt=""
			>
		</div>
	</div>
</template>

<style scoped>
.flair {
  position: fixed;
  opacity: 0;
  width: 50px;
}

body {
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

h1 {
  font-size: 8vw
}
</style>
