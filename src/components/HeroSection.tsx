
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Your partner for professional{' '}
                <span className="text-gradient">translation</span> and{' '}
                <span className="text-gradient">interpreting</span> services
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert language mediation services across Europe. From certified translations 
                to professional interpreting - we connect cultures and facilitate communication.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Quote Now
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="illustration-card rounded-3xl p-8 relative overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Simplified Europe Map */}
                  <path
                    d="M80 120 L120 110 L160 100 L200 90 L250 95 L290 100 L320 110 L340 130 L350 160 L340 190 L320 210 L290 220 L250 225 L200 230 L160 225 L120 220 L80 200 Z"
                    fill="currentColor"
                  />
                  <circle cx="180" cy="140" r="3" fill="currentColor" />
                  <circle cx="220" cy="155" r="3" fill="currentColor" />
                  <circle cx="160" cy="165" r="3" fill="currentColor" />
                </svg>
              </div>

              {/* Main Illustration Elements */}
              <div className="relative z-10 flex flex-col items-center space-y-6">
                {/* Speech Bubbles */}
                <div className="flex justify-between w-full mb-4">
                  <div className="bg-orange-400 rounded-2xl p-3 text-white font-bold text-sm shadow-lg">
                    Hallo!
                  </div>
                  <div className="bg-blue-500 rounded-2xl p-3 text-white font-bold text-sm shadow-lg">
                    Hello!
                  </div>
                </div>

                {/* People Illustration */}
                <div className="flex space-x-8 items-center">
                  {/* Person 1 */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center mb-2">
                      <div className="w-6 h-6 rounded-full bg-white"></div>
                    </div>
                    <div className="w-12 h-8 bg-orange-300 rounded-t-xl"></div>
                  </div>

                  {/* Translation Symbol */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">⇄</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1 font-semibold">Translation</div>
                  </div>

                  {/* Person 2 */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-2">
                      <div className="w-6 h-6 rounded-full bg-white"></div>
                    </div>
                    <div className="w-12 h-8 bg-blue-300 rounded-t-xl"></div>
                  </div>
                </div>

                {/* Language Icons */}
                <div className="flex space-x-4 mt-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">DE</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">EN</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">FR</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">ES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
