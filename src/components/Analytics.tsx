import React, { useEffect } from 'react';

// TODO: Replace with actual IDs from the client
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; 
const CLARITY_PROJECT_ID = 'xxxxxxxxx';

export const Analytics: React.FC = () => {
  useEffect(() => {
    // 1. Google Analytics 4 (GA4) Injection
    if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      const inlineScript = document.createElement('script');
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `;
      document.head.appendChild(inlineScript);
    }

    // 2. Microsoft Clarity Injection
    if (CLARITY_PROJECT_ID !== 'xxxxxxxxx') {
      const clarityScript = document.createElement('script');
      clarityScript.type = 'text/javascript';
      clarityScript.innerHTML = `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
      `;
      document.head.appendChild(clarityScript);
    }
  }, []);

  return null;
};
