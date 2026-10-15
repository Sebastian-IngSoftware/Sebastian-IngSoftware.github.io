// src/utils/renderDescription.ts

const LINK_CLASS =
  "text-accent underline underline-offset-2 break-words transition-colors hover:text-success";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/**
 * Convierte el texto de una descripción en HTML seguro con enlaces.
 * Soporta:
 *   [texto del enlace](https://url)
 *   https://url suelta (se enlaza sola)
 */
export function renderDescription(text: string): string {
  // 1. Escapamos todo el texto: lo que escribas nunca se interpreta como HTML
  const safe = escapeHtml(text);

  // 2. Convertimos enlaces markdown y URLs sueltas en <a>
  return safe.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s<]+[^\s<.,;:!?)])/g,
    (_match, label: string | undefined, mdUrl: string | undefined, bareUrl: string | undefined) => {
      const url = mdUrl ?? bareUrl;
      const content = label ?? bareUrl;
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="${LINK_CLASS}">${content}</a>`;
    },
  );
}
