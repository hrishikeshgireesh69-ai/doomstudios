import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Owner, Premium Car Wash',
      location: 'Mumbai, India',
      image: "https://i.postimg.cc/hGk7zP0T/Screenshot-2026-01-03-161000.png",
      text: 'DoomStudios transformed our car wash business with a stunning website and mobile app. Our bookings increased by 300% in just 3 months!',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO, Clean & Fresh Laundry',
      location: 'London, UK',
      image: "https://i.postimg.cc/vmgVZ6fW/Screenshot-2026-01-03-161016.png",
      text: 'Working with DoomStudios was a game-changer. They delivered a complete digital solution that streamlined our operations globally.',
      rating: 5,
    },
    {
      name: 'Ahmed Al-Farsi',
      role: 'Director, AutoPro Dealership',
      location: 'Dubai, UAE',
      image: 'https://i.postimg.cc/rwp47Hm2/Screenshot-2026-01-03-161038.png',
      text: 'The admin panel and inventory management system they built is phenomenal. Professional service from Kerala to the Gulf!',
      rating: 5,
    },
    {
      name: 'Priya Menon',
      role: 'Founder, SparkClean Services',
      location: 'Bangalore, India',
      image: 'https://i.postimg.cc/fTCX2sw4/Screenshot-2026-01-03-161117.png',
      text: 'Best decision we made for our startup. DoomStudios understood our vision and delivered beyond expectations. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Manager, Express Wash Co.',
      location: 'Singapore',
      image: '/public/images/screenshot_2026-01-03_161105.png',
      text: 'Incredible attention to detail and customer service. The website they built is fast, beautiful, and converts visitors into customers.',
      rating: 5,
    },
    {
      name: 'Anand Krishnan',
      role: 'Owner, Kerala Auto Hub',
      location: 'Kochi, India',
      image: '/public/images/screenshot_2026-01-03_161051.png',
      text: 'Local team with global standards! DoomStudios built our dealership platform with advanced features that impressed even international clients.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/50 rounded-full mb-4">
            <span className="text-red-500 text-sm font-semibold">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by businesses across India and around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300 hover:scale-105 relative"
            >
              <Quote className="absolute top-6 right-6 text-red-600/20" size={48} />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-red-600"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-red-600 text-xs">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-red-600 fill-red-600" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed relative z-10">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
