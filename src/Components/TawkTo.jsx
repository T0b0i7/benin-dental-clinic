import { useEffect } from "react";

// Loads the Tawk.to live-chat widget when both IDs are configured.
// Get them from the embed snippet: https://embed.tawk.to/<PROPERTY_ID>/<WIDGET_ID>
const TawkTo = () => {
  const propertyId = import.meta.env.VITE_TAWK_PROPERTY_ID;
  const widgetId = import.meta.env.VITE_TAWK_WIDGET_ID;

  useEffect(() => {
    if (!propertyId || !widgetId) return;
    if (document.getElementById("tawk-to-script")) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.id = "tawk-to-script";
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);
  }, [propertyId, widgetId]);

  return null;
};

export default TawkTo;
