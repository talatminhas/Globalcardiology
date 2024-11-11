import React, { useEffect } from 'react';
import PlumX from'../../Assets/PlumX.svg'

const PlumXMetrics = ({ doi }) => {
  useEffect(() => {
    // Create a script tag for PlumX
    const script = document.createElement('script');
    script.src = "https://cdn.plu.mx/widget-popup.js";
    script.async = true;
    script.charset = "UTF-8";
    document.body.appendChild(script);

    return () => {
      // Cleanup script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* PlumX Widget Container */}
      <a
        href={`https://plu.mx/plum/a/?doi=${doi}`}
        className="plumx-plum-print-popup"
        data-popup="right"
        data-hide-when-empty="true"
      >
        <img
          src={PlumX}
          alt="PlumX Metrics"
          width={30}
        />
      </a>
    </div>
  );
};

export default PlumXMetrics;
