import React, { useEffect } from 'react';

interface SchemaScriptProps {
  data: object;
}

export const SchemaScript: React.FC<SchemaScriptProps> = ({ data }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
};