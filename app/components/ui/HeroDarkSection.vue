<script setup lang="ts">
const { components } = defineProps<{
	components: Array<{
		name: string;
		props?: object;
	}>;
}>();

const componentsResolved = computed(() => {
	return components.map((comp) => {
		return {
			component: resolveComponent(comp?.name),
			props: comp?.props || {},
		};
	});
});
</script>

<template>
	<ClientOnly>
		<section class="bg-[#161717] flex flex-col py-24 sm:py-32 lg:py-40 gap-14 sm:gap-y-24">
			<section class="w-full lg:max-w-(--ui-container) mx-auto px-4 md:px-8">
				<component
					:is="component.component"
					v-for="(component, index) in componentsResolved"
					:key="index"
					v-bind="component.props"
				/>
			</section>
		</section>
	</ClientOnly>
</template>
