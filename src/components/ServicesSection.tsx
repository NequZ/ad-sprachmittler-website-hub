
const ServicesSection = () => {
  const services = [
    {
      title: "Professional Translation",
      description: "High-quality translations for documents, websites, and marketing materials in multiple languages.",
      icon: "📄",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Interpreting Services",
      description: "Professional interpreting for meetings, conferences, and business negotiations.",
      icon: "🎤",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Certified Translations",
      description: "Official certified translations for legal documents, certificates, and academic transcripts.",
      icon: "✓",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Localization",
      description: "Cultural adaptation of content for different markets and target audiences.",
      icon: "🌍",
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Business Communication",
      description: "Specialized translation and interpreting services for business environments.",
      icon: "💼",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Technical Translation",
      description: "Expert translation of technical documentation and specialized content.",
      icon: "⚙️",
      color: "from-slate-400 to-gray-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive language services to help you communicate effectively 
            across cultures and languages. From simple translations to complex interpreting assignments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card rounded-2xl p-6 transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{service.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
