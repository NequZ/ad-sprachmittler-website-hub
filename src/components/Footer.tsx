
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A.D</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">A.D. Sprachmittler</h3>
                <p className="text-sm text-gray-400">und Dolmetscher</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional translation and interpreting services across Europe. 
              Connecting cultures through expert language mediation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#services" className="block text-gray-400 hover:text-white transition-colors">
                Services
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Legal & Social</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Impressum (Imprint)
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Datenschutz (Privacy Policy)
              </a>
            </div>
            
            <div className="flex space-x-4 mt-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-white font-bold">in</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-white font-bold">f</span>
              </a>
              <a 
                href="mailto:info@ad-sprachmittler.de" 
                className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Email"
              >
                <span className="text-white font-bold">@</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 A.D. Sprachmittler und Dolmetscher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
