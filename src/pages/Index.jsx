import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import ImageGrid from '../components/ImageGrid';
import ImagePopup from '../components/ImagePopup';

const Index = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [kNeighbors, setKNeighbors] = useState(50);
  const [strength, setStrength] = useState(5);

  const handleSearch = (query) => {
    // Implement the search logic here
    console.log('Searching for:', query, 'with K-Neighbors:', kNeighbors, 'and Strength:', strength);
    // For now, let's use dummy data with the YouTube video for the first image
    setSearchResults([
      { id: 1, code: 'IMG001', staticUrl: '/placeholder.svg', gifUrl: '/placeholder.svg', description: 'Sample image 1', youtubeUrl: 'https://www.youtube.com/watch?v=grc0YSEdUQY' },
      { id: 2, code: 'IMG002', staticUrl: '/placeholder.svg', gifUrl: '/placeholder.svg', description: 'Sample image 2' },
      // Add more dummy images as needed
    ]);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  const handleSearchSimilar = (image) => {
    console.log('Searching for images similar to:', image.code);
    // Implement the logic to search for similar images
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">Image Retrieval App</h1>
        
        <div className="flex flex-col items-center space-y-4">
          <SearchBar onSearch={handleSearch} />
          <Filters
            kNeighbors={kNeighbors}
            strength={strength}
            onKNeighborsChange={setKNeighbors}
            onStrengthChange={setStrength}
          />
        </div>
        
        {searchResults.length > 0 && (
          <ImageGrid images={searchResults} onImageClick={handleImageClick} />
        )}
        
        <ImagePopup
          image={selectedImage}
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          onSearchSimilar={handleSearchSimilar}
        />
      </div>
    </div>
  );
};

export default Index;
