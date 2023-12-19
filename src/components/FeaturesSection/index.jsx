import React from 'react';

const features = [
  {
    title: 'Diverse Programming Languages',
    description: 'Learn Python, JavaScript, Ruby, and more with our interactive courses.'
  },
  {
    title: 'Interactive Coding Challenges',
    description: 'Put your skills to the test with real-world problems.'
  },
  {
    title: 'Expert Mentor Support',
    description: 'Get guidance and support from experienced developers.'
  },
  // Add more features as needed
];

const FeatureCard = ({ title, description }) => (
  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
      {/* Placeholder for feature icon */}
    </div>
    <div className="flex-grow">
      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{title}</h2>
      <p className="leading-relaxed text-base">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Why Choose My Learning Website
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Check out the features that make our platform unique and effective for learning programming.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
