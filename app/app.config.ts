export default defineAppConfig({
	ui: {
		color: {
			neutral: 'white',
		},
		header: {
			slots: {
				root: 'bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) relative top-0 z-50',
			},
		},
		pageHero: {
			slots: {
				title: 'text-center lg:text-left',
				description: 'text-center lg:text-left',
				links: 'flex justify-center lg:justify-start',
			},
		},
	},
});
