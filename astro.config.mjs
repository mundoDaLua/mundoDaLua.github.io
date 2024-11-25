import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
	site: 'https://opluan.github.io',
	server: { host: true},
	integrations: [
		starlight({
			// favicon: '/favicon.svg',
			title: 'Mundo Da Lua',
			pagination: false,
			pagefind: false,
			plugins: [
				starlightBlog(),
			],
			social: {
				github: 'https://github.com/opluan',
				linkedin: 'https://www.linkedin.com/in/opluan/',
			},
			sidebar: [
				{
					label: 'Aulas',
					collapsed: true,
					autogenerate: { directory: 'lectures' },
				},
				{
					label: 'Projetos',
					collapsed: true,
					autogenerate: { directory: 'projects' },
					
				},
				// {
				// 	label: 'Sobre',
				// 	link: '/about/',
				// },
			],
		}),
	],
});
