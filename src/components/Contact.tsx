import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Dubai, UAE',
      action: null,
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+63 9167327740',
      action: () => window.open('tel:+639167327740'),
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'Send us an email',
      action: () => window.open('mailto:doomstudiosofficial@gmail.com?subject=Project Inquiry'),
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: 'Chat with us instantly',
      action: () => window.open('https://wa.me/639167327740?text=Hi, I would like to discuss a project with DoomStudios'),
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/50 rounded-full mb-4">
            <span className="text-red-500 text-sm font-semibold">CONTACT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Start Your <span className="text-red-600">Project</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your business digitally? Get in touch with us today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <button
              key={index}
              onClick={method.action || undefined}
              disabled={!method.action}
              className={`bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 text-center transition-all duration-300 ${
                method.action ? 'hover:border-red-600/50 hover:scale-105 cursor-pointer' : 'cursor-default'
              }`}
            >
              <div className="w-14 h-14 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <method.icon className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-gray-400 text-sm">{method.info}</p>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a startup looking to launch or an established business ready to scale,
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://wa.me/918891524208?text=Hi, I would like to discuss a project with DoomStudios')}
              className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-xl"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </button>
            <button
              onClick={() => window.open('mailto:contact@doomstudios.com?subject=Project Inquiry')}
              className="px-8 py-4 bg-black/30 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-black/50 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20 hover:scale-105"
            >
              <Mail size={20} />
              Send Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
