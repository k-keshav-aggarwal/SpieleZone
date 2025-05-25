import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
}: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      let tag = document.querySelector(
        isProperty ? `meta[property='${name}']` : `meta[name='${name}']`
      );
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(isProperty ? 'property' : 'name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    if (description) setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    if (canonical) {
      let canonicalTag = document.querySelector("link[rel='canonical']");
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.rel = 'canonical';
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute('href', canonical);
    }
    if (ogTitle) setMeta('og:title', ogTitle, true);
    if (ogDescription) setMeta('og:description', ogDescription, true);
    if (ogImage) setMeta('og:image', ogImage, true);
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage]);
};
