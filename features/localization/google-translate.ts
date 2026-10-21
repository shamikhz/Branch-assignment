/**
 * Google Translate Integration Helper
 * Allows seamless programmatic switching between English and Hindi,
 * translating the entire webapp via Google Translate on the client side.
 */

export function triggerGoogleTranslate(lang: 'en' | 'hi'): void {
  if (typeof window === 'undefined') return;

  const hostname = window.location.hostname;

  // 1. Set the standard googtrans cookie recognized by Google Translate
  document.cookie = `googtrans=/en/${lang}; path=/;`;
  if (hostname && hostname !== 'localhost') {
    document.cookie = `googtrans=/en/${lang}; domain=.${hostname}; path=/;`;
    document.cookie = `googtrans=/en/${lang}; domain=${hostname}; path=/;`;
  }

  // 2. Find Google's internal dropdown element
  const selectElement = document.querySelector<HTMLSelectElement>('.goog-te-combo');

  if (selectElement) {
    selectElement.value = lang;
    selectElement.dispatchEvent(new Event('change', { bubbles: true }));
  } else {
    // If Google Translate is still initializing, reload so the cookie takes effect immediately
    window.location.reload();
  }
}

/**
 * Reads current language from Google Translate cookie
 */
export function getGoogleTranslateCookie(): 'en' | 'hi' {
  if (typeof document === 'undefined') return 'en';
  const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/i);
  if (match && match[1]?.toLowerCase() === 'hi') {
    return 'hi';
  }
  return 'en';
}
