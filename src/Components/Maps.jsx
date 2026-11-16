
import React from 'react';

const Maps = () => {
    return (
        <div
            className="map-container"
            style={{
                width: '100%',
                maxWidth: '600px',
                height: '400px'
            }}
        >
            <iframe
                title="Dental Clinic Location - Cotonou, Benin"
                src="https://www.google.com/maps?q=Cotonou,%20B%C3%A9nin&z=12&hl=fr&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
            />
        </div>
    );
};

export default Maps;
