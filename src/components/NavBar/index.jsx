import React from 'react';


const NavBar = () => {
    return (
      <nav className="flex justify-between items-center p-4 bg-gray-100">
  <h1 className="text-xl font-bold">My Learning Website</h1>
  <ul className="flex space-x-4">
    <li><a href="/" className="text-gray-600 hover:text-gray-900">Home</a></li>
    <li><a href="/languages" className="text-gray-600 hover:text-gray-900">Languages</a></li>
    <li><a href="/challenges" className="text-gray-600 hover:text-gray-900">Challenges</a></li>
    <li><a href="/about" className="text-gray-600 hover:text-gray-900">About</a></li>
  </ul>
</nav>

    );
  };
  
  export default NavBar;
  