<script setup lang="ts">
import { resolveComponent } from 'vue';

const { components, color } = defineProps<{
	components: Array<{
		component: string;
		props?: object;
		style?: string;
	}>;
	color: string;
}>();

const componentsResolved = computed(() => {
	return components.map((comp) => {
		return {
			...comp,
			component: resolveComponent(comp?.component),
			props: comp?.props || {},
		};
	});
});
</script>

<template>
	<section
		class="w-screen"
		:class="[color !== undefined ? `bg-${color}` : 'bg-black']"
	>
		<div class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
			<component
				:is="component.component"
				v-for="(component, index) in componentsResolved"
				:key="index"
				v-bind="component?.props"
				:class="component?.style"
			/>
		</div>
	</section>
</template>
