require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		owner: 'Mohamed Sassi',
		title: 'Mohamed Sassi · Creative UI Frontend Developer',
		description:
			'A Creative UI Front-end  developer living in Toronto, ON.',
		url: 'https://www.msassi.dev',
		image: '/images/icon.png',
		twitterUsername: '@Sassi360M',
		siteUrl: 'https://www.msassi.dev',
		keyword: [
			'website designer',
			'frontend developer',
			'hire a developer',
			'javascript developer',
			'front end developer profile',
			'hiring freelance developer',
			'freelance frontend developer for hire',
			'freelance web designer toronto',
			'hire web developer toronto',
			'hire freelance web developer',
			'freelance web developer jobs',
			'hire web developer',
			'freelance developers for hire',
			'frontend developer toronto',
			'react developer',
			'web & UI designer',
			'web designer	',
			'freelance web developer job',
			'freelance web developer wanted',
			'website design toronto',
			'toronto web design',
			'web designers toronto',
			'web agency toronto',
		],
	},
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Mohamed Sassi · Creative UI Front-end Developer',
				short_name: 'Sassi DEV',
				start_url: '/',
				theme_color: '#005c89',
				background_color: '#005c89',
				display: `standalone`,
				icon: 'src/images/icon.png',
				include_favicon: true,
				legacy: true,
				crossOrigin: `use-credentials`,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
				head: false,
				anonymize: true,
				respectDNT: true,
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.msassi.dev/',
				sitemap: 'https://www.msassi.dev/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-react-helmet-canonical-urls`,
			options: {
				siteUrl: `https://msassi.dev`,
			},
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-offline',
		'gatsby-plugin-twitter',
		'gatsby-plugin-sitemap',
	],
};
