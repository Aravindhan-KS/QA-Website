import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-start">
            <img
              src="/logo.png"
              alt="Quizzers Anonymous Logo"
              className="w-10 h-10 mb-2"
            />
            <span className="font-bold text-lg text-dark-text mb-1">Quizzers Anonymous</span>
            <p className="text-dark-text-secondary text-sm mb-3 leading-snug">
              The official quiz club of College of Engineering Guindy, Anna University.
            </p>
            <div className="space-y-1 text-xs text-dark-text-secondary">
              <p>Room No. 11, Third Floor, CEG Square</p>
              <p>College of Engineering Guindy</p>
              <p>Anna University, Chennai</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-2 text-dark-text">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/events" className="text-dark-text-secondary hover:text-accent-blue">Events</a></li>
              <li><a href="/quiz-sets" className="text-dark-text-secondary hover:text-accent-blue">Quiz Sets</a></li>
              <li><a href="/articles" className="text-dark-text-secondary hover:text-accent-blue">Articles</a></li>
              <li><a href="/gallery" className="text-dark-text-secondary hover:text-accent-blue">Gallery</a></li>
              <li><a href="/team" className="text-dark-text-secondary hover:text-accent-blue">Team</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-md font-semibold mb-2 text-dark-text">Follow Us</h3>
            <div className="space-y-2 text-sm">
              <a 
                href="https://mail.google.com/mail/?view=cm&to=quizzersanonymousceg@gmail.com&su=General%20Inquiry"
                className="flex items-center space-x-2 text-dark-text-secondary hover:text-accent-blue"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Email</span>
              </a>

              <a 
                href="https://www.instagram.com/cegquizclub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-dark-text-secondary hover:text-accent-blue"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." />
                </svg>
                <span>Instagram</span>
              </a>

              <a 
                href="https://slideshare.net/quizzersanonymous" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-dark-text-secondary hover:text-accent-cyan"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.74 0c-.73 0-1.33.6-1.33 1.33..." />
                </svg>
                <span>SlideShare</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-dark-border mt-6 pt-4 text-center">
          <p className="text-dark-text-secondary text-xs">
            © 2025 Quizzers Anonymous. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
