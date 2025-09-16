import React, { useState } from 'react';
import GalleryImage from '../components/GalleryImage';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  // Mock gallery images
  const images = [
    {
      id: 1,
      src: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Events/1.png",
      caption: "Tech Quiz Championship 2024 - Winners' Celebration",
      category: "events"
    },
    {
      id: 2,
      src: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Events/2.png",
      caption: "Quiz Master explaining the rules before the competition",
      category: "events"
    },
    {
      id: 3,
      src: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Events/3.png",
      caption: "Intense moments during the final round",
      category: "events"
    },
    {
      id: 4,
      src: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Events/4.png",
      caption: "Team QA members brainstorming for new quiz questions",
      category: "team"
    },
    {
      id: 5,
      src: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Events/5.png",
      caption: "Annual team meetup and planning session",
      category: "events"
    },
    {
      id: 6,
      src: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Events/6.png",
      caption: "Science Quiz competition in progress",
      category: "events"
    },
    {
      id: 7,
      src: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Events/7.png",
      caption: "New members joining the Quizzers Anonymous family",
      category: "team"
    },
    {
      id: 8,
      src: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Events/8.png",
      caption: "General Knowledge Quiz - Packed auditorium",
      category: "events"
    },
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: images.length },
    { id: 'events', name: 'Events', count: images.filter(img => img.category === 'events').length },
    { id: 'team', name: 'Team', count: images.filter(img => img.category === 'team').length },
    { id: 'workshops', name: 'Workshops', count: images.filter(img => img.category === 'workshops').length }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-dark-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-text mb-4">Gallery</h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            Relive the memorable moments from our quiz competitions, team activities, and workshops. 
            Each photo tells a story of knowledge, friendship, and intellectual growth.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                filter === category.id
                  ? 'bg-accent-blue text-white'
                  : 'bg-dark-card text-dark-text border border-dark-border hover:bg-dark-hover'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square"
            >
              <GalleryImage image={image} onClick={openModal} />
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Previous button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="max-w-full max-h-full object-contain"
              />

              {/* Caption */}
              {selectedImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <p className="text-white text-center">{selectedImage.caption}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark-card rounded-lg border border-dark-border p-6 text-center">
            <div className="text-3xl font-bold text-accent-blue mb-2">{images.length}</div>
            <div className="text-dark-text-secondary">Total Photos</div>
          </div>
          <div className="bg-dark-card rounded-lg border border-dark-border p-6 text-center">
            <div className="text-3xl font-bold text-accent-green mb-2">15+</div>
            <div className="text-dark-text-secondary">Events Documented</div>
          </div>
          <div className="bg-dark-card rounded-lg border border-dark-border p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
            <div className="text-dark-text-secondary">Years of Memories</div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="mt-16">
          <div className="bg-dark-card rounded-lg border border-dark-border p-8 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-dark-text mb-4">Share Your Moments</h2>
            <p className="text-dark-text-secondary mb-6">
              Have photos from our events that you'd like to share? We'd love to feature them in our gallery! 
              Send us your best shots and become part of our visual story.
            </p>
            <a 
              href="mailto:quizzersanonymous@gmail.com?subject=Gallery%20Submission"
              className="inline-flex items-center space-x-2 bg-accent-cyan text-black px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Submit Photos</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
