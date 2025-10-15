import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg overflow-hidden 
                    transform transition-all duration-300 hover:-translate-y-2 hover:border-accent-white hover:shadow-[0_0_20px_#FFD700]">
      <div className="relative">
        <img
          src={event.poster || '/media/pictures/events/wip.png'}
          alt={event.title}
          className="w-full aspect-[4/5] object-cover"
        />

        {/* Date Badge */}
        <div className="absolute top-4 right-4 bg-white/20 text-white px-2 py-1 rounded text-sm backdrop-blur-sm">
          {event.date}
        </div>

        {/* Status Badge */}
        {event.eventStatus && (
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide ${
              event.eventStatus === 'upcoming'
                ? 'bg-green-500 text-white'
                : 'bg-gray-500 text-white'
            }`}
          >
            {event.eventStatus}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{event.description}</p>

        <div className="space-y-2 mb-4 text-gray-300">
          <div className="flex items-center text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {event.date} {event.time && `at ${event.time}`}
          </div>
          <div className="flex items-center text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.venue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
