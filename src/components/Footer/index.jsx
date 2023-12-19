import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* Include your logo if you have one */}
          <span className="ml-3 text-xl">My Learning Website</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          © {new Date().getFullYear()} My Learning Website —
          <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
            @yourtwitter
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500" href="/">
            <img src="/path-to-your-social-media-icon.svg" alt="Social Media" />
            {/* Include more social media icons as needed */}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
