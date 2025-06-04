import { useEffect } from 'react';

const AdWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = '//pl26835984.profitableratecpm.com/d590a7eeede627e92ad37ac6c3ed8e9a/invoke.js';

    document.getElementById('ad-container')?.appendChild(script);
  }, []);

  return <div id="ad-container"><div id="container-d590a7eeede627e92ad37ac6c3ed8e9a"></div></div>;
};

export default AdWidget;
