import React from 'react';

const LanguageDetail = ({ name, description, imageUrl }) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{name}</h2>
      <p className="mb-4">{description}</p>
      <img src={imageUrl} alt={`${name}`} className="w-full rounded-lg" />
      {/* More detailed content about the language can go here */}
    </div>
  );
};

export default LanguageDetail;
