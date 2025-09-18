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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-dark-text mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              {/* Office Location */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-dark-text-secondary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-text">Office Location</h3>
                  <p className="text-dark-text-secondary">Room No. 11, Third Floor, CEG Square</p>
                  <p className="text-dark-text-secondary">College of Engineering Guindy</p>
                  <p className="text-dark-text-secondary">Anna University, Chennai - 600025</p>
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
                      <span className="text-dark-text-secondary">President: </span>
                      <a href="tel:+919025601119" className="text-accent-blue hover:text-blue-400 transition-colors">
                        +91 90256 01119
                      </a>
                    </div>
                    <div>
                      <span className="text-dark-text-secondary">Vice President: </span>
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
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    
                    <a 
                      href="https://slideshare.net/quizzersanonymous" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.74 0c-.73 0-1.33.6-1.33 1.33v9.39L5.01 5.32c-.52-.52-1.36-.52-1.88 0-.52.52-.52 1.36 0 1.88l7.08 7.08c.52.52 1.36.52 1.88 0l7.08-7.08c.52-.52.52-1.36 0-1.88-.52-.52-1.36-.52-1.88 0l-5.4 5.4V1.33C13.07.6 12.47 0 11.74 0zm-8.41 16c-.73 0-1.33.6-1.33 1.33v4c0 .73.6 1.33 1.33 1.33h17.33c.73 0 1.33-.6 1.33-1.33v-4c0-.73-.6-1.33-1.33-1.33H3.33z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            {/* Google Maps Embed */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-dark-text mb-4">Our Location</h3>
              <div className="bg-dark-card border border-dark-border rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1111.044763878229!2d80.23635566960469!3d13.010738899206785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526700035eebd9%3A0x7984c41bf20d3100!2sCEG%20Square!5e1!3m2!1sen!2sin!4v1758214888628!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="College of Engineering Guindy Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Alumni Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-text mb-4">Our Alumni</h2>
            <p className="text-dark-text-secondary max-w-2xl mx-auto">
              We're proud of our alumni who have gone on to achieve great things in their careers 
              while maintaining their passion for learning and knowledge sharing.
            </p>
          </div>
          
          <div className="bg-dark-card rounded-lg border border-dark-border p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-dark-text mb-2">100+</div>
                <div className="text-dark-text-secondary">Alumni Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-dark-text mb-2">25+</div>
                <div className="text-dark-text-secondary">Companies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-dark-text mb-2">15+</div>
                <div className="text-dark-text-secondary">Countries</div>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-dark-text-secondary mb-4">
                Our alumni network spans across top companies like Google, Microsoft, Amazon, and many more. 
                Stay connected with us through our alumni network.
              </p>
              <a 
                href="www.google.com"
                className="inline-flex items-center space-x-2 bg-accent-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Join Alumni Network</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;