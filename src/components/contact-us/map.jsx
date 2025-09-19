import React from 'react';

const MapSection = () => {
  return (
    <section className="py-0">
      <div className="w-full h-96 md:h-[500px] relative">
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7971628823093!2d72.87783287345937!3d19.072653752081045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c892197ad4a7%3A0x6f69acffd67753e2!2sStudent%20Alliance%20LLP!5e0!3m2!1sen!2sin!4v1758281586818!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Gym Location Map"
          className="w-full h-full"
        ></iframe>

        {/* Optional: Custom overlay with office info */}
        <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
          <h3 className="font-semibold text-gray-800 mb-2">Our Office</h3>
          <p className="text-sm text-gray-600">
            New White House Building No. 3<br />
            Ground Floor<br />
            <span className="text-blue-600 cursor-pointer"><a href="https://share.google/ij2yEoTxay3FhsuyI">Get Directions</a></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;