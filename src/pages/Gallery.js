import React, { useState } from 'react';
import GalleryImage from '../components/GalleryImage';
import images from '../data/galleryImages.json';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');

  // Categories
  const categories = [
    { id: 'all', name: 'All Photos', count: images.length },
    { id: 'events', name: 'Events', count: images.filter(img => img.category === 'events').length },
    { id: 'team', name: 'Team', count: images.filter(img => img.category === 'team').length },
    { id: 'workshops', name: 'Workshops', count: images.filter(img => img.category === 'workshops').length }
  ];

  // Years
  const years = [
    { id: 'all', name: 'All Years', count: images.length },
    { id: '2024', name: '2024', count: images.filter(img => img.year === 2024).length },
    { id: '2025', name: '2025', count: images.filter(img => img.year === 2025).length }
  ];

  // Apply both filters
  // Apply both filters
  const filteredImages = images
    .filter(img => {
      const categoryMatch = filter === 'all' || img.category === filter;
      const yearMatch = yearFilter === 'all' || img.year.toString() === yearFilter;
      return categoryMatch && yearMatch;
    })
    .sort((a, b) => {
      // First sort by year (descending = newer first)
      if (b.year !== a.year) return b.year - a.year;
      // If years are the same, sort by id (descending = newer uploads first)
      return b.id - a.id;
    });


  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

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
            The Memories of Quizzing.
          </p>
        </div>

    
        <br></br>


        {/* Year Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {years.map((year) => (
            <button
              key={year.id}
              onClick={() => setYearFilter(year.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                yearFilter === year.id
                  ? 'bg-accent-green text-white'
                  : 'bg-dark-card text-dark-text border border-dark-border hover:bg-dark-hover'
              }`}
            >
              {year.name} ({year.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div key={image.id} className="aspect-square">
              <GalleryImage image={image} onClick={openModal} />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 
                          w-12 h-12 flex items-center justify-center rounded-full bg-black bg-opacity-40"
              >
                <span className="text-3xl font-bold">✕</span>
              </button>

              {/* Prev */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white 
                          hover:text-gray-300 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-black bg-opacity-40"
              >
                <span className="text-4xl">‹</span>
              </button>

              {/* Next */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white 
                          hover:text-gray-300 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-black bg-opacity-40"
              >
                <span className="text-4xl">›</span>
              </button>

              {/* Image */}
              <img src={selectedImage.src} alt={selectedImage.caption} className="max-w-full max-h-full object-contain" />
              {/* Caption */}
              {selectedImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <p className="text-white text-center">{selectedImage.caption}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
