'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
            layout?: unknown;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

/**
 * Client-only Google Translate Loader.
 * Injects Google Translate after React hydration completes,
 * eliminating SSR/Client DOM mismatch errors.
 */
export const GoogleTranslateLoader: React.FC = () => {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,hi',
              autoDisplay: false,
            },
            'google_translate_element'
          );
        } catch (e) {
          // Non-fatal if already initialized
        }
      }
    };

    const existingScript = document.getElementById('google-translate-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate && window.googleTranslateElementInit) {
      window.googleTranslateElementInit();
    }

    // Actively remove Google Translate top banner iframe if injected
    const removeGoogleBanner = () => {
      const banners = document.querySelectorAll(
        '.goog-te-banner-frame, iframe.goog-te-banner-frame, .goog-te-balloon-frame, #goog-gt-tt'
      );
      banners.forEach((el) => {
        el.remove();
      });
      if (document.body.style.top && document.body.style.top !== '0px') {
        document.body.style.top = '0px';
      }
    };

    removeGoogleBanner();
    const observer = new MutationObserver(() => {
      removeGoogleBanner();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      suppressHydrationWarning
      style={{ display: 'none' }}
    />
  );
};
