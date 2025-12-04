import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const scrollToSection = (sectionId) => {
const element = document.getElementById(sectionId);
element?.scrollIntoView({ behavior: 'smooth' });
setIsMenuOpen(false);
};

const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

return ( <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex justify-between items-center h-16"> <div className="text-2xl font-bold text-gray-900">Portfolio</div>


      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-white border-t shadow-lg">
      <div className="px-4 py-3 space-y-3">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )}
</nav>


);
};

export default Navigation;
