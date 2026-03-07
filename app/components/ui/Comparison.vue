<script setup lang="ts">
const { comparison } = defineProps<{
	comparison: Array<{
		title: {
			color: string;
			icon: string;
			size: string;
			text: string;
		};
		list: [];
	}>;
}>();
</script>

<template>
	<div class="mt-6 lg:mt-12">
		<div
			v-for="(items, index) in comparison"
			:key="index"
			class="w-full lg:w-1/2 flex flex-col gap-6 items-center"
		>
			<ItemList
				:color="items?.title.color"
				:icon="items?.title.icon"
				size="lg"
				:text="items?.title.text"
				class="mt-6 lg:mt-0"
			/>
			<div
				class="p-4 lg:p-8 rounded-3xl bg-[#2d2e2e] flex flex-col flex-1 gap-4"
			>
				<ItemList
					v-for="(item, indx) in items.list"
					:key="indx"
					:color="items.title.color"
					:icon="items.title.icon"
					size="sm"
					:text="item"
				/>
			</div>
		</div>
	</div>
</template>
