import { Palette, BarChart3, Code2, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights and data visualization',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Maintainable, scalable, and well-documented',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security for your business data',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/50 rounded-full mb-4">
            <span className="text-red-500 text-sm font-semibold">FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built With <span className="text-red-600">Excellence</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every project we deliver is crafted with attention to detail and industry best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-8">
                <div className="w-12 h-12 bg-red-600/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                  <feature.icon className="text-red-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a digital solution that exceeds expectations
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
