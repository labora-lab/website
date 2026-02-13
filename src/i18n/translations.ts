export const translations = {
	pt: {
		'nav.home': 'Início',
		'nav.about': 'Sobre',
		'nav.blog': 'Blog',
		'footer.rights': 'Todos os direitos reservados',
		'lang.switch': 'Switch to English',
		'blog.readMore': 'Ler mais',
		'blog.noPosts': 'Nenhum post publicado ainda.',
		'blog.backToBlog': 'Voltar ao Blog',
	},
	en: {
		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.blog': 'Blog',
		'footer.rights': 'All rights reserved',
		'lang.switch': 'Mudar para Português',
		'blog.readMore': 'Read more',
		'blog.noPosts': 'No posts published yet.',
		'blog.backToBlog': 'Back to Blog',
	},
} as const;

export type Lang = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)['pt'];

export function t(lang: Lang, key: TranslationKey): string {
	return translations[lang]?.[key] || key;
}

export function getOtherLang(currentLang: Lang): Lang {
	return currentLang === 'pt' ? 'en' : 'pt';
}