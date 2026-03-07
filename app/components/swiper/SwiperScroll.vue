<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';

const { items } = defineProps<{
	items: Array<{
		id: number;
		label: string;
		title: string;
		text: string;
		cta: string;
		image: string;
	}>;
}>();

// Which text item is currently active (driven by scroll)
const activeIndex = ref(0);

// Refs for the right-column image wrappers (parallax targets)
const panelRefs = ref<HTMLElement[]>([]);
const imageRefs = ref<HTMLElement[]>([]);

let ctx: { revert: () => void } | null = null;

onMounted(async () => {
	try {
		const gsapModule = await import('gsap');
		const scrollTriggerModule = await import('gsap/ScrollTrigger');

		const gsap = gsapModule.gsap ?? gsapModule.default;
		const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

		gsap.registerPlugin(ScrollTrigger);

		ctx = gsap.context(() => {
			// ── 1. Parallax on each right-column panel ──────────────────────────
			imageRefs.value.forEach((image, i) => {
				const wrapper = panelRefs.value[i];
				if (!image || !wrapper) return;

				gsap.fromTo(
					image,
					{ yPercent: 15 },
					{
						yPercent: -15,
						ease: 'none',
						scrollTrigger: {
							trigger: wrapper,
							scrub: true,
							start: 'top bottom',
							end: 'bottom top',
						},
					},
				);
			});

			// ── 2. Update activeIndex as each panel crosses viewport center ─────
			panelRefs.value.forEach((panel, i) => {
				if (!panel) return;

				ScrollTrigger.create({
					trigger: panel,
					start: 'top 55%',
					end: 'bottom 55%',
					onEnter: () => { activeIndex.value = i; },
					onEnterBack: () => { activeIndex.value = i; },
				});
			});
		});
	}
	catch (e) {
		console.error('[ServicesStickySection] GSAP failed to load:', e);
	}
});

onBeforeUnmount(() => {
	ctx?.revert();
});
</script>

<template>
	<section class="w-full bg-(--ui-bg,#faf9f7)">
		<div class="w-full max-w-(--ui-container) mx-auto py-4 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-5 items-start">
			<!-- ── LEFT: sticky text column ──────────────────────────────────────── -->
			<div
				class="static lg:sticky top-0 h-auto lg:h-screen flex flex-col justify-between gap-3 py-4 "
				aria-live="polite"
			>
				<!-- Static heading (always visible) -->
				<Heading
					align="left"
					width="sm"
					size="md"
					title="From eco-conscious travel and streamlined meetings to memorable events,
					we make it happen"
				/>

				<!-- Text panel: transitions when activeIndex changes -->
				<div class="hidden lg:flex flex-col flex-1 justify-center">
					<Transition
						name="fade-slide"
						mode="out-in"
					>
						<div
							:key="activeIndex"
							class="flex flex-col gap-4"
						>
							<span class="text-sm font-semibold tracking-widest uppercase text-muted">{{ items[activeIndex]?.label }}</span>
							<h3 class="sss-title text-lg md:text-3xl font-semibold tracking-wide leading-6 text-default">
								{{ items[activeIndex]?.title }}
							</h3>
							<p class="sss-paragraph text-base leading-6 text-muted max-w-md">
								{{ items[activeIndex]?.text }}
							</p>
							<UButton
								to="/"
								color="neutral"
								variant="solid"
								size="lg"
								trailing-icon="i-lucide-arrow-right"
								class="self-start"
							>
								{{ items[activeIndex]?.cta }}
							</UButton>
						</div>
					</Transition>
				</div>
			</div>

			<!-- ── RIGHT: scrolling image column ─────────────────────────────────── -->
			<div
				class="flex flex-col"
				aria-hidden="true"
			>
				<div
					v-for="(item, i) in items"
					:key="item.id"
					:ref="(el) => { if (el) panelRefs[i] = el as HTMLElement }"
					class="h-screen flex items-center py-8"
				>
					<!-- overflow clip so parallax yPercent stays contained -->
					<div class="w-full h-[75vh] rounded-2xl overflow-hidden relative">
						<div
							:ref="(el) => { if (el) imageRefs[i] = el as HTMLElement }"
							class="absolute inset-x-0 top-[-20%] bottom-[-20%] flex flex-col items-center justify-center gap-4 will-change-transform"
						>
							<img
								:src="item.image"
								:alt="item.title"
								class="size-full object-cover rounded-lg shadow-lg"
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="css" scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(1.5rem);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}
</style>
