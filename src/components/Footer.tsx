import { Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-red-600">Doom</span>
              <span className="text-white">Studios</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium website consultancy firm delivering world-class digital solutions from Kannur, Kerala to the world.
            </p>
          </div>

          <div>
  <h4 className="text-white font-semibold mb-4">Quick Links</h4>

  <ul className="space-y-2 text-sm">
    {[
      { label: 'Home', id: 'home', type: 'scroll' },
      { label: 'Services', id: 'services', type: 'scroll' },
      { label: 'Pricing', id: 'pricing', type: 'scroll' },
      { label: 'About', id: 'about', type: 'scroll' },
      { label: 'DoomWallet', url: 'https://doomwallet.com', type: 'external' },
    ].map((item) => (
      <li key={item.label}>
        {item.type === 'scroll' ? (
          <button
            onClick={() => scrollToSection(item.id)}
            aria-label={`Scroll to ${item.label} section`}
            className="text-gray-400 hover:text-red-600 transition-colors"
          >
            {item.label}
          </button>
        ) : (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-600 transition-colors"
          >
            {item.label}
          </a>
        )}
      </li>
    ))}
  </ul>
</div>


          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Website Development</li>
              <li>Mobile Applications</li>
              <li>Admin Panels</li>
              <li>Database Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Dubai, UAE</li>
              <li>+63 9167327740</li>
              <li>doomstudiosofficial@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} DoomStudios. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-red-600 fill-red-600" /> in Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
