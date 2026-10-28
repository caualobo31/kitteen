import type { MouseEvent } from "react";

// Anexa todos os parâmetros da URL atual (window.location.search) ao destino.
// Parâmetros que já existem no destino são preservados.
export function withCurrentParams(url: string): string {
  const target = new URL(url);
  new URLSearchParams(window.location.search).forEach((value, key) => {
    if (!target.searchParams.has(key)) target.searchParams.append(key, value);
  });
  return target.toString();
}

export function goToCheckout(url: string) {
  window.location.href = withCurrentParams(url);
}

export function checkoutClick(url: string) {
  return (e: MouseEvent) => {
    e.preventDefault();
    goToCheckout(url);
  };
}
