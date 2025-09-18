import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-dark-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-text mb-4">Contact Us</h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            Have questions about our quiz competitions? Want to collaborate or join our team? 
            We'd love to hear from you. Get in touch using any of the methods below.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Office Location */}
          <div>
            <h3 className="font-semibold text-dark-text mb-4">Club Room Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
              {/* Location Details */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-dark-text-secondary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-dark-text-secondary">Room No. 11, Third Floor, CEG Square</p>
                  <p className="text-dark-text-secondary">College of Engineering Guindy</p>
                  <p className="text-dark-text-secondary">Anna University, Chennai - 600025</p>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="w-full h-48 md:h-40 rounded-lg overflow-hidden border border-dark-border">
                <iframe
                  title="CEG Square Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1414.6752982697042!2d80.23602360286792!3d13.010407748628209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526700035eebd9%3A0x7984c41bf20d3100!2sCEG%20Square!5e0!3m2!1sen!2sin!4v1758216082209!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>


          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-dark-text-secondary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-dark-text">Email</h3>
              <a 
                href="mailto:quizzersanonymousceg@gmail.com" 
                className="text-accent-blue hover:text-blue-400 transition-colors"
              >
                quizzersanonymousceg@gmail.com
              </a>
            </div>
          </div>

          {/* Contact Numbers */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-dark-text-secondary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-dark-text">Contact Numbers</h3>
              <div className="space-y-1">
                <div>
                  <span className="text-dark-text-secondary">Jaison Jecinth Vincent (President): </span>
                  <a href="tel:+919025601119" className="text-accent-blue hover:text-blue-400 transition-colors">
                    +91 90256 01119
                  </a>
                </div>
                <div>
                  <span className="text-dark-text-secondary">Visvam Srinivasan (Vice President): </span>
                  <a href="tel:+916385050355" className="text-accent-blue hover:text-blue-400 transition-colors">
                    +91 63850 50355
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-dark-text-secondary mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-dark-text">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                <a 
                  href="https://instagram.com/quizzersanonymous" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href="https://slideshare.net/quizzersanonymous" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  SlideShare
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Reach Out Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-dark-text mb-10">Reach Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 text-center shadow-lg">
              <h3 className="text-xl font-semibold text-dark-text mb-3">Join Our Team</h3>
              <p className="text-dark-text-secondary mb-6">
                Interested in being a part of Quizzers Anonymous? Reach out and become a member.
              </p>
              <a 
                href="#membership"
                className="inline-block bg-accent-blue text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Apply Now
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 text-center shadow-lg">
              <h3 className="text-xl font-semibold text-dark-text mb-3">Collaborations</h3>
              <p className="text-dark-text-secondary mb-6">
                Partner with us for exciting quiz events and academic initiatives.
              </p>
              <a 
                href="#collaborate"
                className="inline-block bg-accent-blue text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Collaborate
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 text-center shadow-lg">
              <h3 className="text-xl font-semibold text-dark-text mb-3">Event Inquiry</h3>
              <p className="text-dark-text-secondary mb-6">
                Have questions about our upcoming quiz competitions? We’ve got you covered.
              </p>
              <a 
                href="#events"
                className="inline-block bg-accent-blue text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Ask Us
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
