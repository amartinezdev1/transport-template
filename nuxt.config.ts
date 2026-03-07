// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

	modules: [
		'@nuxt/content',
		'@nuxt/eslint',
		'@nuxt/hints',
		'@nuxt/image',
		'@nuxt/ui',
	],
	components: [
		{
			path: '~/components',
			pathPrefix: false,
			global: true,
		},
		{
			path: '~/layouts',
			pathPrefix: false,
		},
	],
	devtools: { enabled: true },
	app: {
		head: {
			title: 'Transport - Template',
		},
	},
	css: ['@/assets/css/main.css'],
	build: {
		transpile: ['gsap'],
	},
	compatibilityDate: '2025-07-15',
	nitro: {
		preset: 'static',
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/css/main.css" as *;',
				},
			},
		},
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
});
