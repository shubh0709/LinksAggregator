export function openInNewTab(url: string) {
  window.open(url, "_blank")?.focus();
}

export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}
