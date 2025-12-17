<script setup lang="ts">
</script>

<template>
	<div class="w-full">
		<PageHero />
		<UPageHero
			orientation="horizontal"
			:ui="{ container: 'border-b border-b-zinc-300/50 flex flex-col lg:grid lg:grid-cols-3' }"
		>
			<template #default>
				<div class="w-full lg:max-w-lg flex flex-col gap-4 self-start">
					<h1 class="text-4xl lg:text-5xl font-medium leading:12 lg:leading-14">
						Technology that puts people first
					</h1>
					<p class="text-base">
						Whatever your work, wherever it takes you, however you need to connect, we're with you.<br><br>With cutting-edge technology and people-driven customer service, we provide straightforward travel, meetings and event management that does the business
					</p>
				</div>
				<img
					src="https://picsum.photos/640/640?random=1"
					alt="App screenshot"
					class="logo-outer rounded-lg shadow-2xl ring ring-default"
				>
				<img
					src="https://picsum.photos/640/640?random=2"
					alt="App screenshot"
					class="logo-outer rounded-lg shadow-2xl ring ring-default"
				>
			</template>
		</UPageHero>
		<UPageHero>
			<template #default>
				<div class="w-full flex justify-between gap-12 relative">
					<h2 class="max-w-xl text-4xl lg:text-5xl font-medium leading:12 lg:leading-14">
						From eco-conscious travel and streamlined meetings to memorable events, we make it happen
					</h2>
				</div>
			</template>
		</UPageHero>
	</div>
</template>
