import React from 'react';

const languages = [
  {
    name: 'Python',
    description: 'Versatile language for web development, data analysis, AI, and more.'
  },
  {
    name: 'JavaScript',
    description: 'Essential for web development, build interactive websites and applications.'
  },
  {
    name: 'Java',
    description: 'Popular language for enterprise-level back-end development.'
  },
  // Add more languages or courses as needed
];

const LanguageCard = ({ name, description }) => (
  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
      {/* Placeholder for language icon or image */}
      <h2 className="title-font font-medium text-3xl text-gray-900">{name}</h2>
      <p className="leading-relaxed text-base">{description}</p>
    </div>
  </div>
);

const LanguagesSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Programming Languages We Offer
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Dive into any of these languages with our comprehensive courses and challenges.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {languages.map((language, index) => (
            <LanguageCard key={index} name={language.name} description={language.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
