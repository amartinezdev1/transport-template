<script setup lang="ts">
const { components } = defineProps<{
	components: Array<{
		name: string;
		styleClass?: string;
		props?: object;
	}>;
}>();

const componentsResolved = computed(() => {
	return components.map((comp) => {
		return {
			component: resolveComponent(comp?.name),
			props: comp?.props || {},
			styleClass: comp?.styleClass || '',
		};
	});
});
</script>

<template>
	<ClientOnly>
		<section class="w-full py-24 sm:py-32 lg:py-40 ">
			<section class="w-full flex flex-col gap-16">
				<component
					:is="component.component"
					v-for="(component, index) in componentsResolved"
					:key="index"
					v-bind="component.props"
					:class="component.styleClass"
				/>
			</section>
		</section>
	</ClientOnly>
</template>
