import { Target, Eye, Globe2, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses worldwide with cutting-edge digital solutions that drive growth and innovation.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the most trusted digital partner for businesses across India and internationally.',
    },
    {
      icon: Globe2,
      title: 'Global Reach',
      description: 'Serving clients from Kannur to the world, delivering excellence across 12+ countries.',
    },
    {
      icon: Award,
      title: 'Our Commitment',
      description: 'Premium quality, timely delivery, and exceptional support for every project we undertake.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/50 rounded-full mb-4">
            <span className="text-red-500 text-sm font-semibold">ABOUT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building Digital <span className="text-red-600">Excellence</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Based in the heart of Kannur, Kerala, DoomStudios is a premium website consultancy firm
            specializing in complete digital solutions. We serve businesses across industries from car wash
            services and laundry operations to dealerships and innovative startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="text-red-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-red-600/10 to-red-900/10 border border-red-600/30 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Why Choose <span className="text-red-600">DoomStudios?</span>
              </h3>
              <ul className="space-y-4">
                {[
                  'Local expertise with global standards',
                  'Proven track record across multiple industries',
                  'End-to-end solutions from concept to deployment',
                  'Dedicated support and maintenance',
                  'Competitive pricing without compromising quality',
                  'Agile development methodology',
                  'Focus on ROI and business growth',
                  'Transparent communication throughout',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-red-600/50 shadow-2xl shadow-red-600/20">
                <img
                  src="https://img.freepik.com/premium-photo/team-multiethnic-indian-software-engineers-having-meeting-order-review-code-done-by_901408-10009.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-2xl">
                <div className="text-4xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
