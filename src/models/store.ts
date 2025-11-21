import { nanoid } from "nanoid";

const store: Record<string, string> = {};

/**
 * Genera una URL y devuelve un slug generado
 * @param url La URL larga a acortar
 * @returns El slug (codifo corto) generado.
 */
export function saveUrl(url: string): string {
  const slug = nanoid(6);
  store[slug] = url;
  return slug;
}

/**
 * Busca una URL por su slug.
 * @param slug El código corto de la URL.
 * @returns La URL larga o undefined si no se encuentra.
 */
export function getUrl(slug: string): string | undefined {
  return store[slug];
}
