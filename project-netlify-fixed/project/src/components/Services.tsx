import { Globe, Smartphone, Layout, Database, Lightbulb, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom, responsive websites that drive results. Built with modern technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and grow your business on iOS and Android.',
      features: ['iOS & Android', 'Cloud Integration', 'Push Notifications', 'Offline Support'],
    },
    {
      icon: Layout,
      title: 'Admin Panels',
      description: 'Powerful, intuitive admin dashboards to manage your business operations efficiently with real-time insights.',
      features: ['Custom Dashboards', 'Analytics', 'User Management', 'Role-Based Access'],
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Scalable, secure database architecture designed for performance, reliability, and data integrity.',
      features: ['Cloud Databases', 'Data Security', 'Backup Systems', 'API Integration'],
    },
    {
      icon: Lightbulb,
      title: 'Digital Consultancy',
      description: 'Strategic guidance to transform your business digitally. From concept to execution, we help you succeed.',
      features: ['Strategy Planning', 'Tech Stack Selection', 'Process Optimization', 'Growth Roadmaps'],
    },
    {
      icon: Zap,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development covering frontend, backend, databases, and deployment for complete digital ecosystems.',
      features: ['Complete Systems', 'API Development', 'Cloud Deployment', 'Maintenance Support'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/50 rounded-full mb-4">
            <span className="text-red-500 text-sm font-semibold">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Complete Digital <span className="text-red-600">Solutions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to deployment, we deliver comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-red-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20"
            >
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600/30 transition-colors">
                <service.icon className="text-red-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
