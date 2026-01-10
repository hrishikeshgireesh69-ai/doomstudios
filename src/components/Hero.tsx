import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/1867438318/video/binary-code-strings-matrix-style-backdrop-in-red.jpg?s=640x640&k=20&c=feHPhXjUX9_VpahChHrvZ91nbLi271LbrsQowU3qzSY=')] bg-cover bg-center opacity-50"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/50 rounded-full mb-8 animate-pulse">
          <Sparkles size={16} className="text-red-500" />
          <span className="text-red-500 text-sm font-medium">Premium Digital Solutions</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Your Business
          <br />
          With <span className="text-red-600">Digital Excellence</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          World-class website development, mobile applications, and complete digital systems.
          From Dubai to the world, we build premium solutions for ambitious businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-red-600/50 hover:shadow-red-600/70 hover:scale-105"
          >
            Start Your Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105"
          >
            Explore Services
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Projects Delivered', value: '150+' },
            { label: 'Happy Clients', value: '100+' },
            { label: 'Countries Served', value: '12+' },
            { label: 'Success Rate', value: '100%' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
