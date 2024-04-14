import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	server: { host: true},
	integrations: [
		starlight({
			// favicon: '/favicon.svg',
			title: 'Mundo Da Lua',
			pagination: false,
			pagefind: false,
			social: {
				github: 'https://github.com/opluan',
			},
			sidebar: [
				{
					label: 'Sobre',
					link: '/about/',
				},
				{
					label: 'Posts',
					autogenerate: { directory: 'posts' },
				},
				{
					label: 'Projetos',
					autogenerate: { directory: 'projects' },
				},
			],
		}),
	],
});
