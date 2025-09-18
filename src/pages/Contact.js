{/* Office Location */}
<div>
  <h3 className="font-semibold text-dark-text mb-4">Office Location</h3>
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0331946725407!2d80.23351671533295!3d13.010978990823845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b4e0d7a3e3%3A0x6c14a3d2a1dbe9d3!2sCEG%20Square!5e0!3m2!1sen!2sin!4v1693825023977!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>
