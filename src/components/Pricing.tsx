import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for small businesses getting started',
      price: 'Custom',
      features: [
        'Professional Business Website',
        'Responsive Design (Mobile & Desktop)',
        '5-7 Pages',
        'Contact Form Integration',
        'SEO Optimization',
        'Social Media Integration',
        'Basic Analytics Setup',
        '1 Month Free Support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Standard',
      description: 'Most popular for growing businesses',
      price: 'Custom',
      features: [
        'Everything in Basic',
        'Standard Mobile Application (iOS & Android)',
        'Push Notifications',
        'User Authentication',
        'Cloud Integration',
        'Advanced Analytics',
        'API Integration',
        '3 Months Free Support',
        'App Store Submission',
      ],
      cta: 'Most Popular',
      popular: true,
    },
    {
      name: 'Full-Fledged',
      description: 'Complete digital ecosystem for enterprises',
      price: 'Custom',
      features: [
        'Everything in Standard',
        'Advanced Mobile App Features',
        'Custom Admin Panel',
        'Database Architecture',
        'User Management System',
        'Real-time Dashboard',
        'Advanced Security Features',
        'Third-party Integrations',
        'Scalable Infrastructure',
        '6 Months Free Support',
        'Priority Support 24/7',
      ],
      cta: 'Go Premium',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/50 rounded-full mb-4">
            <span className="text-red-500 text-sm font-semibold">PRICING PLANS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-red-600">Package</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Flexible pricing options designed to match your business needs and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${
                plan.popular
                  ? 'from-red-600/20 to-red-900/20 border-red-600'
                  : 'from-gray-900 to-black border-gray-800'
              } border-2 rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'md:-mt-4 md:mb-4 shadow-2xl shadow-red-600/30' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Star size={16} fill="currentColor" />
                  <span className="font-semibold text-sm">Most Popular</span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-red-600">{plan.price}</span>
                </div>
                <p className="text-xs text-gray-500">Contact for exact pricing</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-red-600" />
                    </div>
                    <span className="text-gray-300 text-sm leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/50'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            Need a custom solution?{' '}
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-red-600 hover:text-red-500 font-semibold underline"
            >
              Contact us for a personalized quote
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
