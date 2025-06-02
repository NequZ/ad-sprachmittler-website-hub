
import { Star } from 'lucide-react';

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-800 ml-3">5/5</span>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "Excellent professional translation service! A.D. Sprachmittler provided fast, 
                accurate translations for our business documents. The quality exceeded our expectations 
                and the communication was outstanding throughout the entire process."
              </p>
              
              <div className="pt-4">
                <p className="font-semibold text-gray-800">Verified Google Review</p>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <span className="text-gray-600">1 Review</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">100%</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">All our clients are satisfied with our service quality</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">24h</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times for urgent projects</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">15+</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Languages</h3>
              <p className="text-gray-600">Professional services in multiple languages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
