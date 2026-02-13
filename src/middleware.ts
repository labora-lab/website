import { defineMiddleware } from 'astro:middleware';

// Com prefixDefaultLocale: true, o Astro cuida do routing automaticamente
// Middleware vazio para futuras customizações se necessário
export const onRequest = defineMiddleware(async (_context, next) => {
	return next();
});