export function trackEvent(event) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event });
}
