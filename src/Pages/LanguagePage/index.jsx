import React from 'react';
import LanguageDetail from '../../components/LanguageDetail'

const LanguagePage = () => {
  // You might have language data coming in from an API or a static file
  const languagesData = [
    {
      name: 'Python',
      description: 'Learn Python with our interactive courses and real-world projects.',
      imageUrl: '/path-to-python-image.png', // Replace with your image path
    },
    // ... other languages
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-center my-10">Programming Languages</h1>
        {/* You can iterate over languagesData to create a detail component for each */}
        {languagesData.map(language => (
          <LanguageDetail key={language.name} {...language} />
        ))}
      </div>
    </div>
  );
};

export default LanguagePage;
