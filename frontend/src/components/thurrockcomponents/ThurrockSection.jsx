import React from 'react';

const ThurrockSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Local Gambling Support in Thurrock</h3>
      <p className="text-gray-600 leading-relaxed mb-6">
        If you or someone you know is affected by gambling harm in Thurrock, there are local resources and services available to support you. We work to connect residents with free, confidential advice and treatment options tailored to your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
          <h4 className="font-semibold text-gray-800 mb-2">Thurrock Advice Lines</h4>
          <p className="text-sm text-gray-600 mb-3">Get in touch with local support advisors for immediate guidance.</p>
          <span className="text-sm font-bold text-Primary">Call: 0808 8020 133</span>
        </div>
        <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
          <h4 className="font-semibold text-gray-800 mb-2">In-Person Services</h4>
          <p className="text-sm text-gray-600 mb-3">Find local counseling and support groups near Grays and wider Thurrock.</p>
          <span className="text-sm font-bold text-Primary">Free & Confidential</span>
        </div>
      </div>
    </div>
  );
};

export default ThurrockSection;
