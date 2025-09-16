import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-start">
            <img
              src="/logo.png"
              alt="Quizzers Anonymous Logo"
              className="w-12 h-12 mb-4"
            />
            <span className="font-bold text-xl text-dark-text mb-2">Quizzers Anonymous</span>
            <p className="text-dark-text-secondary mb-4">
              The official quiz club of College of Engineering Guindy, Anna University.
              Join us for exciting quiz competitions, knowledge sharing, and intellectual discussions.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-dark-text-secondary">Room No. 11, Third Floor, CEG Square</p>
              <p className="text-sm text-dark-text-secondary">College of Engineering Guindy</p>
              <p className="text-sm text-dark-text-secondary">Anna University, Chennai</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dark-text">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/events" className="text-dark-text-secondary hover:text-accent-blue transition-colors">Events</a></li>
              <li><a href="/quiz-sets" className="text-dark-text-secondary hover:text-accent-blue transition-colors">Quiz Sets</a></li>
              <li><a href="/articles" className="text-dark-text-secondary hover:text-accent-blue transition-colors">Articles</a></li>
              <li><a href="/gallery" className="text-dark-text-secondary hover:text-accent-blue transition-colors">Gallery</a></li>
              <li><a href="/team" className="text-dark-text-secondary hover:text-accent-blue transition-colors">Team</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dark-text">Follow Us</h3>
            <div className="space-y-3">
              <a 
                href="https://mail.google.com/mail/?view=cm&to=quizzersanonymousceg@gmail.com&su=General%20Inquiry" 
                className="flex items-center space-x-2 text-dark-text-secondary hover:text-accent-blue transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Email</span>
              </a>
              
              <a 
                href="https://www.instagram.com/cegquizclub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-dark-text-secondary hover:text-accent-blue transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>

              <a 
                href="https://slideshare.net/quizzersanonymous" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-dark-text-secondary hover:text-accent-cyan transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.74 0c-.73 0-1.33.6-1.33 1.33v9.39L5.01 5.32c-.52-.52-1.36-.52-1.88 0-.52.52-.52 1.36 0 1.88l7.08 7.08c.52.52 1.36.52 1.88 0l7.08-7.08c.52-.52.52-1.36 0-1.88-.52-.52-1.36-.52-1.88 0l-5.4 5.4V1.33C13.07.6 12.47 0 11.74 0zm-8.41 16c-.73 0-1.33.6-1.33 1.33v4c0 .73.6 1.33 1.33 1.33h17.33c.73 0 1.33-.6 1.33-1.33v-4c0-.73-.6-1.33-1.33-1.33H3.33z"/>
                </svg>
                <span>SlideShare</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-dark-border mt-8 pt-8 text-center">
          <p className="text-dark-text-secondary text-sm">
            © 2025 Quizzers Anonymous. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;