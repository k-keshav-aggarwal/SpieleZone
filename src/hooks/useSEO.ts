import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const useSEO = ({
  title,
  description,
  canonical,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
}: SEOProps) => {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector("meta[name='description']")?.getAttribute('content') || '';
    const prevKeywords = document.querySelector("meta[name='keywords']")?.getAttribute('content') || '';

    // Set title
    document.title = title;

    // Description
    let descTag = document.querySelector("meta[name='description']") as HTMLMetaElement | null;
    if (!descTag) {
      descTag = document.createElement('meta') as HTMLMetaElement;
      descTag.name = 'description';
      document.head.appendChild(descTag);
    }
    descTag.content = description;

    // Canonical
    let canonicalTag = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link') as HTMLLinkElement;
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = canonical || window.location.href;

    // Keywords (optional)
    if (keywords) {
      let keywordTag = document.querySelector("meta[name='keywords']") as HTMLMetaElement | null;
      if (!keywordTag) {
        keywordTag = document.createElement('meta') as HTMLMetaElement;
        keywordTag.name = 'keywords';
        document.head.appendChild(keywordTag);
      }
      keywordTag.content = keywords;
    }

    // Open Graph (optional)
    const setOgTag = (property: string, content: string | undefined) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property='${property}']`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta') as HTMLMetaElement;
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setOgTag('og:title', ogTitle || title);
    setOgTag('og:description', ogDescription || description);
    setOgTag('og:url', canonical || window.location.href);
    setOgTag('og:image', ogImage || '');

    // Cleanup on unmount
    return () => {
      document.title = prevTitle;
      if (descTag) descTag.content = prevDesc;
      if (canonicalTag) canonicalTag.href = window.location.origin;
    };
  }, [title, description, canonical, keywords, ogTitle, ogDescription, ogImage]);
};
