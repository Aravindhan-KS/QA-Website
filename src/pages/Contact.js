import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.08] pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our quiz competitions? Want to collaborate or join our team? 
            We'd love to hear from you. Get in touch using any of the methods below.
          </p>
        </div>

        {/* Horizontal divider */}
        <div className="border-t border-white/10 my-6"></div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16 relative z-10">

          {/* Left Info */}
          <div className="space-y-8">

            {/* Club Room */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Club Room Location</h3>
                <p className="text-gray-400">Room No. 11, Third Floor, CEG Square</p>
                <p className="text-gray-400">College of Engineering Guindy</p>
                <p className="text-gray-400">Anna University, Chennai - 600025</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <a 
                  href="mailto:quizzersanonymousceg@gmail.com" 
                  className="text-indigo-400 hover:text-indigo-500 transition-colors"
                >
                  quizzersanonymousceg@gmail.com
                </a>
              </div>
            </div>

            {/* Contact Numbers */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Contact Numbers</h3>
                <div className="space-y-1 text-gray-400">
                  <div>
                    Jaison Jecinth Vincent (President): 
                    <a href="tel:+919025601119" className="text-indigo-400 hover:text-indigo-500 transition-colors ml-1">
                      +91 90256 01119
                    </a>
                  </div>
                  <div>
                    Visvam Srinivasan (Vice President): 
                    <a href="tel:+916385050355" className="text-indigo-400 hover:text-indigo-500 transition-colors ml-1">
                      +91 63850 50355
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Map */}
          <div className="w-full h-96 lg:h-[500px] rounded-lg overflow-hidden border border-white/10 shadow-md">
            <iframe
              title="CEG Square Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1111.044763878229!2d80.23635566960469!3d13.010738899206785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526700035eebd9%3A0x7984c41bf20d3100!2sCEG%20Square!5e1!3m2!1sen!2sin!4v1758214888628!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

    {/* Reach Out Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {[
          {
            title: "Enquiry and Suggestions",
            text: "Have something to let us know or do you want to know something about us? Click the button below!",
            link: "https://forms.gle/X2cA1tWy9Fgroknr7",
            iconBg: "bg-accent-green",
            shadowColor: "shadow-accent-green/30"
          },
          {
            title: "Alumni",
            text: "Were you part of the QA Fam during your college days? We would love to get in touch with you!",
            link: "https://forms.gle/dGmWYF13DzBW38mN7",
            iconBg: "bg-accent-blue",
            shadowColor: "shadow-accent-blue/30"
          },
          {
            title: "Something Fun",
            text: "Are you bored? Click here to watch something interesting and fun!",
            link: "https://youtu.be/xvFZjo5PgG0?si=T1aNYOUiu4Dxgw0Y",
            iconBg: "bg-accent-yellow",
            shadowColor: "shadow-accent-yellow/30"
          }
        ].map((card, idx) => (
          <a
            key={idx}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg 
                      hover:bg-white/20 ${card.shadowColor} transition-all duration-300 transform hover:-translate-y-2 text-white`}
          >
            <div className={`w-12 h-12 ${card.iconBg} rounded-lg flex items-center justify-center mb-4`}>
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
            <p className="text-gray-300 mb-4">{card.text}</p>
          </a>
        ))}
      </div>


      </div>
    </div>
  );
};

export default Contact;
