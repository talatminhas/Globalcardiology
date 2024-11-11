import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import React, { useEffect } from 'react';

const DimensionsBadge = () => {
  useEffect(() => {
    // Ensure the script is loaded when the component is mounted
    const script = document.createElement('script');
    script.src = "https://badge.dimensions.ai/badge.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <span class="__dimensions_badge_embed__" data-doi="10.1038/nplants.2015.7" data-dimesion-id="pub.1170262384" data-legend="always"></span>
  );
};

export default DimensionsBadge;
