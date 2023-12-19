import React from 'react';

const testimonials = [
  {
    quote: "This platform has revolutionized the way I learn programming. The challenges are engaging and the community is incredibly supportive.",
    name: "Alex Johnson",
    title: "Web Developer"
  },
  {
    quote: "As a beginner, I found the courses to be perfectly paced and the interactive coding environment is top-notch!",
    name: "Samantha Smith",
    title: "Computer Science Student"
  },
  {
    quote: "I've managed to improve my coding skills and land my first tech job thanks to the in-depth courses offered here.",
    name: "Daniel Brown",
    title: "Junior Software Engineer"
  },
  // Add more testimonials as needed
];

const TestimonialCard = ({ quote, name, title }) => (
  <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
    <div className="h-full text-center">
      <p className="leading-relaxed">{quote}</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{name}</h2>
      <p className="text-gray-500">{title}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
